import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WhatsApp Chatbot with FastAPI: Complete Developer Guide',
  description: 'Step-by-step guide to build a production WhatsApp chatbot with FastAPI, Python, and the WhatsApp Business API. Includes auth, deployment, and scaling tips.',
  keywords: [
    'WhatsApp chatbot FastAPI', 'build WhatsApp chatbot with FastAPI', 'WhatsApp Business API python example',
    'deploy WhatsApp bot to production', 'FastAPI webhook', 'WhatsApp API integration', 'chatbot development',
    'Python chatbot', 'production chatbot deployment', 'WhatsApp Business API tutorial'
  ]
}

export default function BuildWhatsAppChatbotFastAPI() {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>

        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Technical Guide
            </span>
            <div className="text-gray-500 text-sm">
              Published on January 20, 2024 • 25 min read
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            How to Build a WhatsApp Chatbot with FastAPI — Step-by-Step
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            A comprehensive developer guide to building production-ready WhatsApp chatbots using FastAPI and the WhatsApp Business API. 
            Learn webhook handling, message routing, LLM integration, and deployment strategies.
          </p>
        </header>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Executive Summary</h3>
            <p className="text-blue-800 dark:text-blue-200">
              This guide teaches you to build a WhatsApp chatbot that handles customer inquiries, processes orders, and provides 
              24/7 support. Business value: 70% reduction in response time, 300% increase in customer engagement, and 50% cost savings 
              compared to traditional customer service.
            </p>
          </div>

          <h2>Why WhatsApp Chatbots Drive Business Value</h2>
          <p>
            WhatsApp chatbots represent a paradigm shift in customer engagement. With over 2 billion active users globally, 
            WhatsApp provides a familiar, trusted platform for customer interactions. When properly implemented, chatbots can:
          </p>
          <ul>
            <li><strong>Reduce Response Time:</strong> From hours to seconds for common inquiries</li>
            <li><strong>Increase Customer Satisfaction:</strong> 24/7 availability and instant responses</li>
            <li><strong>Lower Operational Costs:</strong> Handle 80% of routine queries automatically</li>
            <li><strong>Improve Conversion Rates:</strong> Guided product discovery and seamless ordering</li>
            <li><strong>Scale Without Limits:</strong> Handle thousands of concurrent conversations</li>
          </ul>

          <h2>Architecture Overview</h2>
          <p>
            A production WhatsApp chatbot requires several interconnected components working together:
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
            <h3 className="font-semibold mb-3">Core Components:</h3>
            <ul className="space-y-2">
              <li><strong>FastAPI Application:</strong> High-performance web framework for handling webhooks</li>
              <li><strong>WhatsApp Business API:</strong> Official API for sending/receiving messages</li>
              <li><strong>Message Queue:</strong> Redis or RabbitMQ for handling high message volumes</li>
              <li><strong>Session Storage:</strong> Database for storing conversation context</li>
              <li><strong>LLM Integration:</strong> OpenAI GPT or similar for intelligent responses</li>
              <li><strong>Human Handover:</strong> Fallback system for complex queries</li>
            </ul>
          </div>

          <h2>Setting Up WhatsApp Business API & Credentials</h2>
          <p>
            Before writing code, you need to set up your WhatsApp Business API account:
          </p>
          
          <h3>1. WhatsApp Business API Setup</h3>
          <ul>
            <li>Create a Meta Developer account at developers.facebook.com</li>
            <li>Set up a WhatsApp Business app</li>
            <li>Configure webhook URL and verify token</li>
            <li>Generate permanent access token</li>
            <li>Set up phone number and business profile</li>
          </ul>

          <h3>2. Environment Configuration</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <code className="text-sm">
              # .env file<br/>
              WHATSAPP_ACCESS_TOKEN=your_permanent_access_token<br/>
              WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id<br/>
              WHATSAPP_VERIFY_TOKEN=your_custom_verify_token<br/>
              OPENAI_API_KEY=your_openai_api_key<br/>
              DATABASE_URL=postgresql://user:pass@localhost/db<br/>
              REDIS_URL=redis://localhost:6379
            </code>
          </div>

          <h2>FastAPI Webhook: Example Code</h2>
          <p>
            The webhook endpoint receives messages from WhatsApp and handles verification:
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <code className="text-sm">
              {`from fastapi import FastAPI, Request, HTTPException, Depends
from fastapi.security import HTTPBearer
import hmac
import hashlib
import json
from typing import Dict, Any

app = FastAPI(title="WhatsApp Chatbot API")
security = HTTPBearer()

class WhatsAppWebhook:
    def __init__(self):
        self.verify_token = os.getenv("WHATSAPP_VERIFY_TOKEN")
        self.access_token = os.getenv("WHATSAPP_ACCESS_TOKEN")
    
    def verify_signature(self, request: Request, body: bytes) -> bool:
        """Verify webhook signature from WhatsApp"""
        signature = request.headers.get("x-hub-signature-256", "")
        if not signature:
            return False
        
        expected_signature = "sha256=" + hmac.new(
            self.access_token.encode(),
            body,
            hashlib.sha256
        ).hexdigest()
        
        return hmac.compare_digest(signature, expected_signature)
    
    @app.get("/webhook")
    async def verify_webhook(self, mode: str, token: str, challenge: str):
        """Handle webhook verification"""
        if mode == "subscribe" and token == self.verify_token:
            return {"hub.challenge": challenge}
        raise HTTPException(status_code=403, detail="Verification failed")
    
    @app.post("/webhook")
    async def handle_webhook(self, request: Request):
        """Handle incoming WhatsApp messages"""
        body = await request.body()
        
        if not self.verify_signature(request, body):
            raise HTTPException(status_code=401, detail="Invalid signature")
        
        data = json.loads(body)
        
        # Process messages
        if "entry" in data:
            for entry in data["entry"]:
                for change in entry.get("changes", []):
                    if change.get("value", {}).get("messages"):
                        for message in change["value"]["messages"]:
                            await self.process_message(message)
        
        return {"status": "ok"}`}
            </code>
          </div>

          <h2>Message Handling & LLM Integration</h2>
          <p>
            The message processor handles incoming messages and generates intelligent responses:
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <code className="text-sm">
              {`import openai
from redis import Redis
import json

class MessageProcessor:
    def __init__(self):
        self.redis = Redis.from_url(os.getenv("REDIS_URL"))
        openai.api_key = os.getenv("OPENAI_API_KEY")
    
    async def process_message(self, message: Dict[str, Any]):
        """Process incoming WhatsApp message"""
        user_id = message["from"]
        message_text = message["text"]["body"]
        
        # Get conversation context
        context = self.get_conversation_context(user_id)
        
        # Generate response using LLM
        response = await self.generate_response(message_text, context)
        
        # Send response back to WhatsApp
        await self.send_whatsapp_message(user_id, response)
        
        # Update conversation context
        self.update_conversation_context(user_id, message_text, response)
    
    async def generate_response(self, message: str, context: str) -> str:
        """Generate intelligent response using OpenAI"""
        prompt = f"""You are a helpful customer service assistant for a business.
        Previous conversation: {context}
        Customer: {message}
        Assistant:"""
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful customer service assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150,
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    def get_conversation_context(self, user_id: str) -> str:
        """Retrieve conversation history from Redis"""
        context = self.redis.get(f"conversation:{user_id}")
        return context.decode() if context else ""
    
    def update_conversation_context(self, user_id: str, message: str, response: str):
        """Update conversation history in Redis"""
        context = self.get_conversation_context(user_id)
        new_context = f"{context}\\nCustomer: {message}\\nAssistant: {response}"
        
        # Keep only last 10 exchanges to manage memory
        exchanges = new_context.split("\\n")[-20:]
        self.redis.setex(f"conversation:{user_id}", 3600, "\\n".join(exchanges))`}
            </code>
          </div>

          <h2>Human Handover & Fallback Strategies</h2>
          <p>
            Even the best chatbots need human intervention for complex queries:
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <code className="text-sm">
              {`class HumanHandover:
    def __init__(self):
        self.complexity_threshold = 0.8
        self.agent_availability = True
    
    async def should_handover(self, message: str, confidence: float) -> bool:
        """Determine if message should be handed to human agent"""
        # Check confidence score
        if confidence < self.complexity_threshold:
            return True
        
        # Check for handover keywords
        handover_keywords = ["speak to human", "agent", "representative", "help"]
        if any(keyword in message.lower() for keyword in handover_keywords):
            return True
        
        # Check agent availability
        return not self.agent_availability
    
    async def initiate_handover(self, user_id: str):
        """Transfer conversation to human agent"""
        handover_message = """I'm connecting you with a human agent who will assist you shortly. 
        Please wait while I transfer your conversation."""
        
        await self.send_whatsapp_message(user_id, handover_message)
        
        # Notify human agent
        await self.notify_agent(user_id)
        
        # Update conversation status
        self.redis.set(f"handover:{user_id}", "pending", ex=300)`}
            </code>
          </div>

          <h2>Deployment, Scaling, and Observability</h2>
          <p>
            Production deployment requires careful consideration of scalability and monitoring:
          </p>
          
          <h3>Deployment Checklist</h3>
          <ul>
            <li><strong>HTTPS Required:</strong> WhatsApp only accepts HTTPS webhooks</li>
            <li><strong>Load Balancing:</strong> Use nginx or cloud load balancer</li>
            <li><strong>Message Queuing:</strong> Implement Redis/RabbitMQ for high volume</li>
            <li><strong>Background Workers:</strong> Use Celery for async message processing</li>
            <li><strong>Database Scaling:</strong> Consider read replicas for high traffic</li>
          </ul>

          <h3>Monitoring & Observability</h3>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <code className="text-sm">
              {`# Docker Compose for production deployment
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/chatbot
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: chatbot
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
  
  redis:
    image: redis:6-alpine
  
  celery:
    build: .
    command: celery -A app.celery worker --loglevel=info
    depends_on:
      - redis
      - db`}
            </code>
          </div>

          <h2>Security & Compliance Checklist</h2>
          <p>
            WhatsApp chatbots handle sensitive customer data and must comply with security standards:
          </p>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
            <h3 className="font-semibold mb-3">Security Requirements:</h3>
            <ul className="space-y-2">
              <li>✅ HTTPS with valid SSL certificate</li>
              <li>✅ Webhook signature verification</li>
              <li>✅ Rate limiting and DDoS protection</li>
              <li>✅ Secure API key storage (environment variables)</li>
              <li>✅ Data encryption at rest and in transit</li>
              <li>✅ GDPR compliance for data handling</li>
              <li>✅ Regular security audits and updates</li>
            </ul>
          </div>

          <h2>Testing, Monitoring, and Costs</h2>
          <p>
            Comprehensive testing and monitoring ensure reliable chatbot operation:
          </p>
          
          <h3>Testing Strategy</h3>
          <ul>
            <li><strong>Unit Tests:</strong> Test individual message handlers</li>
            <li><strong>Integration Tests:</strong> Test webhook endpoints</li>
            <li><strong>Load Testing:</strong> Simulate high message volumes</li>
            <li><strong>User Acceptance Testing:</strong> Real user scenarios</li>
          </ul>

          <h3>Cost Estimation</h3>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-3">Monthly Costs (1000 conversations/day):</h4>
            <ul className="space-y-1 text-sm">
              <li>• WhatsApp Business API: $50-100</li>
              <li>• OpenAI API: $30-80</li>
              <li>• Cloud Infrastructure: $100-200</li>
              <li>• Monitoring & Analytics: $20-50</li>
              <li><strong>Total: $200-430/month</strong></li>
            </ul>
          </div>

          <h2>Final Checklist & Resources</h2>
          <p>
            Before going live, ensure you've completed all requirements:
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <h3 className="font-semibold mb-3">Pre-Launch Checklist:</h3>
            <ul className="space-y-2">
              <li>✅ WhatsApp Business API account configured</li>
              <li>✅ Webhook endpoints tested and verified</li>
              <li>✅ Message handling and LLM integration working</li>
              <li>✅ Human handover system implemented</li>
              <li>✅ Security measures in place</li>
              <li>✅ Monitoring and alerting configured</li>
              <li>✅ Load testing completed</li>
              <li>✅ GDPR compliance verified</li>
              <li>✅ Documentation and runbooks created</li>
            </ul>
          </div>

          <h3>Additional Resources</h3>
          <ul>
            <li><a href="https://developers.facebook.com/docs/whatsapp" className="text-blue-600 hover:text-blue-700">WhatsApp Business API Documentation</a></li>
            <li><a href="https://fastapi.tiangolo.com/" className="text-blue-600 hover:text-blue-700">FastAPI Official Documentation</a></li>
            <li><a href="https://openai.com/api/" className="text-blue-600 hover:text-blue-700">OpenAI API Documentation</a></li>
            <li><a href="/blog" className="text-blue-600 hover:text-blue-700">More AI/ML Development Guides</a></li>
          </ul>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
              Need Help Building Your WhatsApp Chatbot?
            </h2>
            <p className="text-purple-800 dark:text-purple-200 mb-6">
              Get expert consultation to architect and deploy your WhatsApp chatbot. Our team has built 
              production chatbots for businesses across industries with proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/917433000131?text=Hi! I want to discuss building a WhatsApp chatbot for my business."
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

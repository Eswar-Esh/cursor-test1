# AI Resume Agent - LiveKit Agents Playground

A multimodal AI agent for resume building and career guidance using the [LiveKit Agents framework](https://github.com/livekit/agents). This project combines voice, video, and text interactions to provide personalized resume assistance.

## 🚀 Features

- **Multimodal AI Agent**: Voice, video, and text interactions
- **Real-time Communication**: Powered by LiveKit WebRTC
- **Resume Builder**: AI-powered resume creation and optimization
- **Avatar Integration**: Support for Tavus AI avatars
- **Modern UI**: Built with Next.js, Tailwind CSS, and Framer Motion
- **Docker Support**: Complete containerization for easy deployment

## 🏗️ Architecture

- **Frontend**: Next.js 14 with TypeScript
- **Real-time**: LiveKit for WebRTC communication
- **AI Agents**: LiveKit Agents framework
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis for session management
- **Styling**: Tailwind CSS with custom components
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

- Node.js 18+ 
- Docker & Docker Compose
- LiveKit Cloud account (or self-hosted LiveKit)
- OpenAI API key
- Tavus API key (optional)

## 🛠️ Quick Start

### 1. Clone and Setup

```bash
git clone https://github.com/Eswar-Esh/cursor-test1.git
cd cursor-test1
```

### 2. Environment Configuration

Copy the environment template and configure your keys:

```bash
cp env.example .env.local
```

Edit `.env.local` with your API keys:

```env
# LiveKit Configuration
LIVEKIT_API_KEY=your_livekit_api_key_here
LIVEKIT_API_SECRET=your_livekit_api_secret_here
NEXT_PUBLIC_LIVEKIT_URL=wss://your-livekit-cloud-url.livekit.cloud

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Tavus Avatar Configuration (optional)
TAVUS_API_KEY=your_tavus_api_key_here
```

### 3. Docker Setup (Recommended)

Start all services with Docker Compose:

```bash
# Install dependencies and start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

This will start:
- Next.js app on http://localhost:3000
- LiveKit server on ws://localhost:7880
- PostgreSQL on localhost:5432
- Redis on localhost:6379
- Redis Commander on http://localhost:8081

### 4. Local Development (Alternative)

If you prefer local development:

```bash
# Install dependencies
npm install

# Start PostgreSQL and Redis (using Docker)
docker-compose up postgres redis -d

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## 🎯 Usage

1. **Access the Application**: Open http://localhost:3000
2. **Join a Room**: Enter a room name to start an AI session
3. **Interact with AI**: Use voice, video, or text to get resume feedback
4. **Build Resume**: Fill in your details and let the AI guide you

## 🔧 Development

### Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
├── lib/               # Utility libraries
├── types/             # TypeScript types
├── utils/             # Helper functions
├── hooks/             # Custom React hooks
└── styles/            # Additional styles
```

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode

# Linting & Type Checking
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript check

# Docker
npm run docker:build     # Build Docker image
npm run docker:run       # Run Docker container
npm run docker:compose   # Start with Docker Compose
```

### Adding New Features

1. **LiveKit Agent**: Create agents in the `agents/` directory
2. **API Routes**: Add new endpoints in `src/app/api/`
3. **Components**: Build reusable components in `src/components/`
4. **Database**: Update schema in `prisma/schema.prisma`

## 🔗 Integrations

### LiveKit Agents

This project is built on the [LiveKit Agents framework](https://github.com/livekit/agents), which provides:

- Real-time voice and video AI agents
- Multimodal interactions
- Scalable architecture
- Built-in WebRTC support

### Tavus Avatar Integration

For AI avatar functionality, integrate with [Tavus](https://docs.livekit.io/agents/integrations/avatar/tavus/):

```typescript
// Example Tavus integration
import { TavusAvatar } from '@/components/TavusAvatar';

// Use in your components
<TavusAvatar 
  apiKey={process.env.TAVUS_API_KEY}
  avatarId="your-avatar-id"
/>
```

## 🚀 Deployment

### Docker Deployment

```bash
# Build and push to registry
docker build -t your-registry/ai-resume-agent .
docker push your-registry/ai-resume-agent

# Deploy with Docker Compose
docker-compose -f docker-compose.prod.yml up -d
```

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Self-hosted LiveKit

For production, consider self-hosting LiveKit:

```bash
# Follow LiveKit deployment guide
# https://docs.livekit.io/home/self-hosting/deployment
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [LiveKit](https://livekit.io/) for the real-time communication framework
- [LiveKit Agents](https://github.com/livekit/agents) for the AI agent framework
- [Open Resume](https://github.com/xitanggg/open-resume) for inspiration
- [Tavus](https://tavus.com/) for AI avatar technology

## 📞 Support

- **Documentation**: [LiveKit Agents Docs](https://docs.livekit.io/agents)
- **Community**: [LiveKit Discord](https://discord.gg/livekit)
- **Issues**: [GitHub Issues](https://github.com/Eswar-Esh/cursor-test1/issues)

---

Built with ❤️ using LiveKit Agents framework 
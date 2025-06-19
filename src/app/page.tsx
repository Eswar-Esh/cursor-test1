'use client';

import { useState } from 'react';
import { LiveKitRoom, VideoConference } from '@livekit/components-react';
import '@livekit/components-styles';

export default function HomePage() {
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleJoinRoom = async () => {
    if (!roomName.trim()) return;
    
    try {
      // In a real app, you'd get the token from your backend
      const response = await fetch('/api/livekit/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomName, participantName: 'User' }),
      });
      
      const { token: roomToken } = await response.json();
      setToken(roomToken);
      setIsConnected(true);
    } catch (error) {
      console.error('Failed to get token:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Resume Agent
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build your perfect resume with the help of our AI agent. 
            Get real-time feedback through voice, video, and chat interactions.
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {!isConnected ? (
            <div className="card max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Join AI Session</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="roomName" className="block text-sm font-medium text-gray-700 mb-2">
                    Room Name
                  </label>
                  <input
                    id="roomName"
                    type="text"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="Enter room name"
                    className="input-field"
                  />
                </div>
                <button
                  onClick={handleJoinRoom}
                  disabled={!roomName.trim()}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Join Room
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* LiveKit Room */}
              <div className="card">
                <h2 className="text-2xl font-semibold mb-4">AI Resume Agent Session</h2>
                <LiveKitRoom
                  token={token}
                  serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL || 'wss://localhost:7880'}
                  connect={true}
                  video={true}
                  audio={true}
                >
                  <VideoConference />
                </LiveKitRoom>
              </div>

              {/* Resume Builder Interface */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Resume Builder</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input type="text" className="input-field" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Professional Summary
                      </label>
                      <textarea 
                        className="input-field h-24 resize-none" 
                        placeholder="Brief professional summary..."
                      />
                    </div>
                    <button className="btn-primary w-full">
                      Generate Resume
                    </button>
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">AI Feedback</h3>
                  <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
                    <p className="text-gray-600 text-sm">
                      AI feedback will appear here as you interact with the agent...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
# 🤖 AI Welcome Robot Assistant – Janak Parmar Portfolio

An interactive 3D AI Welcome Assistant built with React.js and Three.js for my personal developer portfolio.

The assistant welcomes visitors with a 3D animated robot and a pre-recorded AI-generated voice introduction.

## ✨ Features

- Interactive 3D Robot built using Three.js
- Custom robot design using 3D geometries
- Animated robot floating and head movement
- AI-generated voice introduction using ElevenLabs
- MP3 audio playback using the HTML Audio API
- Basic mouth animation while the voice is playing
- Welcome popup with close and reopen functionality
- Responsive popup layout using Tailwind CSS
- React component-based architecture

## 🛠️ Technologies Used

- React.js
- JavaScript
- Three.js
- Tailwind CSS
- HTML Audio API
- ElevenLabs AI Voice Generation
- Vite

## 📁 Project Structure

```text
src/
├── Components/
│   ├── WelcomeRobot.jsx
│   └── WelcomePopup.jsx
│
├── App.jsx
└── ...

public/
└── audio/
    └── intro.mp3
```

## 🤖 3D Robot Development

The robot was created programmatically using Three.js.

Instead of using a pre-made robot image or video, different 3D geometries were combined to create the robot.

### Geometries Used

- SphereGeometry – Head, eyes, mouth and other rounded parts.
- CapsuleGeometry – Body, neck, arms and legs.
- THREE.Group() – Combines individual robot parts into one robot.

### Materials and Lighting

Different materials were used to create a metallic and futuristic appearance.

- MeshStandardMaterial
- MeshBasicMaterial
- Metallic and roughness properties
- Ambient, Directional and Point Lights

## 🎙️ AI Voice Integration

The voice introduction was generated using ElevenLabs Text to Speech.

The generated MP3 file is stored inside:

`public/audio/intro.mp3`

The HTML Audio API is used to play the voice when the visitor clicks the Start Introduction button.

```javascript
const audio = new Audio("/audio/intro.mp3");
audio.play();
```

## 🎬 Animation System

The robot animation is managed using:

- requestAnimationFrame()
- Math.sin()
- Three.js object transformations

A React state named `isSpeaking` controls the basic mouth animation.

When the audio starts, the speaking state becomes true. When the audio ends, it becomes false.

The robot receives this state through React props.

**Note:** The current mouth animation is a basic time-based speaking animation, not phoneme-based or real audio-synchronized lip-sync.

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the Project

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

Open the local URL displayed by Vite in your terminal.

## 🧠 What I Learned

While developing this feature, I learned:

- Creating 3D objects using Three.js
- Working with geometries, materials and lighting
- Managing 3D animations with requestAnimationFrame
- Integrating Three.js with React components
- Using React Hooks such as useState, useRef and useEffect
- Playing audio files using the HTML Audio API
- Passing state between React components using props
- Managing animation and resource cleanup

## 🚀 Future Improvements

- Real audio-synchronized lip-sync animation
- More natural robot gestures and expressions
- Interactive voice-based conversations
- AI-powered question and answer functionality

## 👨‍💻 Developer

**Janak Parmar**

Full Stack Developer | MERN Stack Developer

GitHub: https://github.com/parmarjanak9714


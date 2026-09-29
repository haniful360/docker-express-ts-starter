# Docker Express TypeScript Starter

A modern, production-ready boilerplate for building REST APIs using **Node.js**, **Express**, **TypeScript**, and **Docker**. Configured with live-reload in development using Docker volumes and `tsx watch`.

---

## 🚀 Features

- **Runtime & Framework:** Node.js (v18+) with Express 5
- **TypeScript:** Strict type-checking with modern ES Modules (`"type": "module"`)
- **Fast Live-Reload:** Instant TypeScript execution and hot-reloading with [`tsx watch`](https://github.com/privatenumber/tsx)
- **Containerized:** Docker & Docker Compose setup with volume mounting for instant code updates without container restarts
- **Production Ready:** Separate Dockerfile setups for development and production builds
- **Essential Middlewares:** Pre-configured with CORS, JSON body parser, and Morgan request logging
- **Health Check Endpoint:** Ready-to-use `/health` monitoring route

---

## 📁 Project Structure

```text
.
├── api/
│   ├── src/
│   │   └── index.ts          # Application entry point & routes
│   ├── Dockerfile            # Dockerfile for development
│   ├── Dockerfile.prod       # Dockerfile for production
│   ├── package.json          # Node dependencies & npm scripts
│   ├── tsconfig.json         # TypeScript compiler configuration
│   └── .dockerignore         # Docker ignore rules
├── docker-compose.yaml       # Multi-container orchestration & volumes
└── README.md
```

---

## 🛠️ Prerequisites

Make sure you have the following installed on your machine:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Docker & Docker Compose)
- [Node.js](https://nodejs.org/) (v18 or higher - *optional, only if running without Docker*)
- [Git](https://git-scm.com/)

---

## 🏃 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/haniful360/docker-express-ts-starter.git
cd docker-express-ts-starter
```

---

### 2. Run with Docker (Recommended)

#### Start the Development Server
Build and start the container with live-reload:

```bash
docker-compose up --build
```

To run in the background (detached mode):

```bash
docker-compose up -d --build
```

The API will be available at: **`http://localhost:4000`**

#### View Logs
```bash
docker-compose logs -f
```

#### Stop the Containers
```bash
docker-compose down
```

---

### 3. Run Locally (Without Docker)

If you prefer to run the project directly on your local machine:

1. Navigate to the `api` directory:
   ```bash
   cd api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server (with hot-reload):
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Run compiled production code:
   ```bash
   npm start
   ```

---

## 🌐 API Endpoints

| Method | Endpoint  | Description               | Sample Response |
| :----- | :-------- | :------------------------ | :-------------- |
| `GET`  | `/health` | Server health check route | `{"status": "UP", "path": "/health"}` |

---

## ⚙️ Environment Variables

The default development environment variables are set in [`docker-compose.yaml`](docker-compose.yaml):

| Variable       | Default Value | Description                     |
| :------------- | :------------ | :------------------------------ |
| `PORT`         | `8080`        | Port Express listens on inside the container |
| `NODE_ENV`     | `development` | Node runtime environment         |
| `DATABASE_URL` | `testDb`      | Database connection string      |

> **Note:** The container port `8080` is mapped to port `4000` on your host machine (`4000:8080`).

---

## 🐳 Important Docker Commands — Cheat Sheet

Useful Docker CLI commands for image and container management:

| Action / কাজ | Command | Description |
| :----------------------- | :---------------------------------- | :------------------------------------------- |
| **Image build**          | `docker build -t myapp:latest .`   | Dockerfile থেকে নতুন ইমেজ তৈরি করা           |
| **Images দেখুন**         | `docker images`                     | লোকাল সিস্টেমে থাকা সব ইমেজ লিস্ট করা        |
| **Image pull**           | `docker pull redis`                 | Docker Hub থেকে ইমেজ নামিয়ে আনা             |
| **Container create**     | `docker create redis`               | কনটেইনার তৈরি করা (কিন্তু চালু না করে)       |
| **Container run**        | `docker run redis`                  | নতুন কনটেইনার তৈরি করে সাথে সাথে রান করা    |
| **Interactive run**      | `docker run -it redis`              | কনটেইনার টার্মিনাল এক্সেস সহ রান করা        |
| **Temporary container**  | `docker run -it --rm redis`         | কাজ শেষ হলে নিজে থেকেই ডিলিট হয়ে যাবে       |
| **Background run**       | `docker run -d redis`               | ব্যাকগ্রাউন্ডে (Detached mode) রান করা       |
| **Running containers**   | `docker ps`                         | বর্তমানে চালু থাকা কনটেইনার লিস্ট দেখা      |
| **All containers**       | `docker ps -a`                      | বন্ধ এবং চালু সব কনটেইনারের লিস্ট দেখা      |
| **Container start**      | `docker start <id>`                 | বন্ধ থাকা কনটেইনার চালু করা                  |
| **Start + attach**       | `docker start -a <id>`              | কনটেইনার চালু করে আউটপুট দেখতে থাকা         |
| **Container stop**       | `docker stop <id>`                  | রানিং কনটেইনার সেফলি বন্ধ করা               |
| **Container logs**       | `docker logs <id>`                  | কনটেইনারের লগ আউটপুট চেক করা                 |
| **Container shell**      | `docker exec -it <id> bash`         | রানিং কনটেইনারের ভেতরে bash শেল ওপেন করা    |
| **Container details**    | `docker inspect <id>`               | কনটেইনারের বিস্তারিত তথ্য/কনফিগ দেখা        |
| **Remove container**     | `docker rm <id>`                    | বন্ধ থাকা কনটেইনার ডিলিট করা                |
| **Force remove**         | `docker rm -f <id>`                 | চালু থাকা অবস্থায় জোরপূর্বক রিমুভ করা       |
| **Remove image**         | `docker rmi <image>`                | ইমেজ মুছে ফেলা                               |
| **Cleanup unused resources** | `docker system prune`           | অপ্রয়োজনীয় ক্যাশ, নেটওয়ার্ক ও ইমেজ ক্লিন করা |

---

## 📜 Available Scripts (inside `api/`)

- `npm run dev`: Runs the app in development mode using `tsx watch` (auto-restarts on code changes).
- `npm run build`: Compiles TypeScript files into the `dist/` directory and resolves path aliases.
- `npm start`: Runs the compiled JavaScript application (`node ./dist/index.js`).

---

## 📝 License

This project is licensed under the [ISC License](LICENSE).

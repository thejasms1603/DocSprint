# 🚀 Collaborative Document App

Welcome to the **Collaborative Document App**, a real-time document collaboration platform built with **Next.js**, **Clerk for authentication**, and **Liveblocks** for collaborative editing. This app allows users to share documents, collaborate seamlessly, and manage access permissions.

## 📸 Demo
Check out the live demo [here](https://tms-doc-sprint.vercel.app/).

## 📦 Tech Stack
- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Authentication:** Clerk
- **Real-Time Collaboration:** Liveblocks
- **Deployment:** Vercel
- **Monitoring:** Sentry

## ✨ Features
- 🔑 **Authentication:** Secure login and sign-up with Clerk.
- 📝 **Real-Time Collaboration:** Edit documents together with synchronized changes.
- 🧑‍💻 **User Roles:** Assign "editor" or "viewer" access to collaborators.
- 📚 **Document Management:** Create, update, and share documents.
- 🌐 **Responsive UI:** Mobile-friendly design with Tailwind CSS.
- 📜 Error Monitoring: Integrated with Sentry for performance monitoring and error tracking.

## 🛠️ Installation
1. Clone the repository:
```bash
git clone https://github.com/thejasms1603/DocSprint.git
cd DocSprint
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file and add the following:
```
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-api>
CLERK_SECRET_KEY=<your-clerk-secret-key>
LIVEBLOCKS_SECRET_KEY=<your-liveblocks-key>
SENTRY_AUTH_TOKEN=<your-firebase-api-key>
```

4. Run the app locally:
```bash
npm run dev
```
Visit `http://localhost:3000` to see the app in action.

## 🚀 Deployment
To deploy the app on Vercel:
1. Push your code to GitHub.
2. Connect your GitHub repo to Vercel.
3. Add environment variables in the Vercel dashboard.
4. Deploy!

## 🤝 Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📄 License
This project is licensed under the MIT License.

## 📧 Contact
For any questions, reach out to [Thejas Mandya Shashidhara](mailto:thejasabhi705@gmail.com).

---
⭐️ Don't forget to star the repo if you found this useful!


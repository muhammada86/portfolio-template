```markdown
# Dynamic Portfolio Template

This is a dynamic portfolio template built with NextJS. By simply editing the object values in the `src/utils/data/` folder, you can quickly create and customize a portfolio tailored to your needs without any complex configurations. Everything is dynamic and easy to update!

---

## ✨ Features

- Fully dynamic content
- Easy to customize by editing JSON-like objects
- Responsive design
- Ready to deploy

---

## 🚀 Quick Start

### 1. Fork the Repository

Click on the Fork button in the top-right corner of this repository to create your own copy.

### 2. Clone the Repository

After forking, clone the repository to your local machine:
```

```bash
git clone https://github.com/muhammada86/portfolio-template.git
```

### 3. Navigate to the Project Directory

```bash
cd portfolio-template
```

### 4. Install Dependencies

Make sure you have Node.js installed on your machine. Then run:

```bash
npm install
```

### 5. Run the Development Server

Start the development server to preview your portfolio:

```bash
npm run dev
```

Your portfolio should now be accessible at `http://localhost:3000` in your browser.

---

## 🛠️ How to Customize

1. Open the `src/utils/data/` folder.

2. Update the object values in the `personalData.ts` file:

### Example of `personalData.ts`:

```typescript
export const personalData = {
  name: "Your Name",
  profile: "/profile.png", // Replace the image with your transparent public/profile.png
  designation: "Your Designation",
  description: `A short bio about yourself`,
  experience: 5, // Years of experience
  email: "your.email@example.com",
  phone: "+123456789",
  address: "Your Address",
  github: "https://github.com/yourusername",
  facebook: "https://www.facebook.com/yourusername",
  linkedIn: "https://www.linkedin.com/in/yourusername/",
  twitter: "https://twitter.com/yourusername",
  stackOverflow: "https://stackoverflow.com/users/yourid",
  leetcode: "https://leetcode.com/yourusername/",
  devUsername: "yourDev.toUsername",
  resume: "https://your-resume-link",
};
```

3. Update the `metaData` object in the same file to personalize the website's metadata (title, description, and SEO keywords).

### Example of `metaData`:

```typescript
export const metaData = {
  title: "Your Name - Your Designation",
  description: "A brief overview of your skills and expertise",
  keywords: [
    "Your Name",
    "Your Designation",
    "Portfolio Website",
    "JavaScript Developer",
  ],
};
```

4. Save the file and reload your development server. Your custom portfolio is now ready!

5. You have to integrate [Resend](https://resend.com/) to receive contact emails. You can signup and get the api key and add it in `.env` file.
6. To update the icon.ico in src/app, you can generate it from [Fav Icon Generator](https://favicon.io/favicon-converter/)

---

## 🌟 Deployment

Once you're happy with your portfolio, deploy it to a hosting service like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

### Example Deployment on Vercel:

1. Push your changes to GitHub:

```bash
git add .
git commit -m "Customized my portfolio"
git push origin main
```

2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Follow the instructions to deploy.
4. You will have to add resend API value in Vercel Environment Variable

Your portfolio will be live in minutes!

---

## 📄 License

This project is open-source and available under the MIT License.

---

🎉 Happy Coding!

# Dishcovery

A modern React application for discovering and managing recipes, built with Material-UI and React Router.

## Features

- **Launch Screen**: Welcome screen for new users
- **Authentication**: User login and signup functionality
- **Home Page**: Main dashboard with bottom navigation
- **Search**: Recipe search functionality
- **Notifications**: Real-time notifications system with categorized updates
- **Modern UI**: Material-UI components with a clean, responsive design
- **Bottom Navigation**: Easy access to main features (Home, Search, Generate, Notifications, Profile)

## Tech Stack

- React.js
- Material-UI (MUI)
- React Router DOM
- Context API for state management

## Getting Started

1. Clone the repository
```bash
git clone [your-repository-url]
cd dishcovery
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will start running at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── BottomNav.js
│   ├── HomePage.js
│   ├── LaunchScreen.js
│   ├── Login.js
│   ├── NotificationsPage.js
│   ├── SearchPage.js
│   └── SignUp.js
├── context/
│   └── UserContext.js
└── App.js
```

## Updating Code to GitHub

1. Initialize Git repository (if not already done):
```bash
git init
```

2. Add all files to staging:
```bash
git add .
```

3. Commit your changes:
```bash
git commit -m "Your commit message here"
```

4. Link to your GitHub repository (if not already done):
```bash
git remote add origin [your-repository-url]
```

5. Push changes to GitHub:
```bash
git push -u origin main
```

For subsequent updates:
```bash
git add .
git commit -m "Description of your changes"
git push
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
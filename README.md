# XLogin

XLogin is a simple React-based login interface that validates user credentials. The app provides a user-friendly experience with validation for empty fields and feedback messages for successful or failed login attempts.

## Features

- **Mandatory Fields**: The form ensures that both the username and password fields are filled before submission.
- **Validation**: Checks for the correct username (`user`) and password (`password`).
- **Feedback Messages**:
  - Displays "Welcome, user!" for valid credentials.
  - Displays "Invalid username or password" for invalid credentials.
- **Responsive Design**: Designed to work seamlessly across different screen sizes.
- **Good Practices**: Uses semantic HTML elements like `form`, `label`, and `input`.

## How It Works

1. The user enters a username and password.
2. On clicking the **Submit** button:
   - If both fields are empty, the message "Please fill both fields." is displayed.
   - If the username is `user` and the password is `password`, the message "Welcome, user!" is displayed.
   - For any other combination, the message "Invalid username or password" is displayed.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Lokesh8755/XLogin_Implementation
   cd xlogin

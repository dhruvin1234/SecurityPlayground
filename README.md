# Security Playground

Security Playground is an interactive vulnerable web application designed for learning and practicing common web security vulnerabilities. It provides hands-on labs for students,beginners and security enthusiasts.

## 🔥 Vulnerabilities Included
- SQL Injection
- Cross-Site Scripting (XSS)
- Command Injection
- File Upload Vulnerability
- Path Traversal
- Information Disclosure
- SSRF
- SSTI (Server-side template injection)
- API Testing

## 🚀 Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourname/security-playground.git
   ```
2. **Go into the project folder**
   ```
   cd security-playground
   ```

3. **Install all dependencies**
   ```
   npm install
   ```
4. **Note: If you get react-scripts: not found, then run:**
   ```
   npm install react-scripts --save
   ```
   and then run npm start again.
   
## ▶️ How to Start
1. **Run the development server using:**
   ```
   npm start
   ```
2. **Now open your browser and go to:**
  ```http://localhost:3000```

## 🖼️ Screenshot

### Homepage of Security Playground
<img width="1920" height="924" alt="image" src="https://github.com/user-attachments/assets/3f160c20-d7c0-4dc1-94c4-f1e855b5a9aa" />

### Lab Dashboard (Vulnerability Selection Page)
<img width="1920" height="923" alt="image" src="https://github.com/user-attachments/assets/c0ae4ba8-5de7-437f-950c-c10990b9e48c" />

### Insights Section (Learning Material)
<img width="1920" height="922" alt="image" src="https://github.com/user-attachments/assets/7a511b23-ff4d-4470-9acd-5d50cfe32f99" />

### About Page (Vision & Mission)
<img width="1920" height="924" alt="image" src="https://github.com/user-attachments/assets/a34cb13e-dd30-4a6c-8ec8-96f0e19be1f2" />

### Contact Page
<img width="1920" height="925" alt="image" src="https://github.com/user-attachments/assets/2a4bab75-51a4-473f-8b54-b81f1a1ddf73" />

### 🔧 Command Injection Lab
This lab simulates a vulnerable system command interface where user input is directly passed to an OS command without sanitization — allowing the attacker to inject additional commands.
<img width="1920" height="924" alt="image" src="https://github.com/user-attachments/assets/753aa4d7-fc8a-4cfa-971e-bf613ef12129" />

### Command Injection Lab (Demo)
```
Example Payload:
104.21.25.166;whoami
```
<img width="1920" height="925" alt="image" src="https://github.com/user-attachments/assets/f875cf55-dea4-48a6-844b-d3212ca35c05" />

```
Example Payload:
104.21.25.166;ls
```
<img width="1920" height="924" alt="image" src="https://github.com/user-attachments/assets/f4da0014-5f96-446b-99eb-a82f3e601543" />

### File Upload Vulnerability Labs
<img width="1920" height="922" alt="image" src="https://github.com/user-attachments/assets/b48dc389-b3a8-4eea-879c-16bfd990f658" />

### File Upload Lab – No File Type Validation (Demo)
```
Example exploitation:  
Upload a `.php` reverse shell instead of an image to achieve remote code execution.
```
<img width="1920" height="923" alt="image" src="https://github.com/user-attachments/assets/2e7302e6-e643-45c9-97fd-9e3e4626d8e7" />

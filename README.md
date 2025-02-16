# **Know Your Rights **

## Context**

**Know Your Rights** provides accessible, clear, and reliable information about individuals' legal rights when interacting with law enforcement. It users understand what to do if they are detained or questioned by police, ICE, or other authorities.

### **Why We Built This**
Inspired by the **Hack(H)er 413 Diversity Panel**, we reflected on the role of technology in promoting justice and inclusion. The panel sparked crucial questions for us:  
- How can we create technology that protects people, not power structures?  
- Can we design systems to prioritize fairness and inclusivity?  
- How do we make complex legal information simple and accessible for everyone?

**Legal knowledge should be clear, actionable, and accessible for all** —especially for marginalized communities who may face biases in law enforcement interactions. 

## 🔍 **Project Walkthrough**

### 1️⃣ **Landing Page (welcome.html)**  
Upon opening the app, users are greeted with a simple, bold landing page offering two primary options:  
- **Learn More**: Redirects to the **Learn Page** with general rights information.  
- **Help Now**: Redirects to the **SOS Page** for tailored, scenario-based guidance.  

### 2️⃣ **Profile Setup Page (profile.html)**  
Users can input **optional demographic details**—such as **age, gender, immigration status, disability, race, and religion**—to receive more relevant, personalized advice.  
- **Opt-Out Option**: Users can choose not to provide this information if they feel uncomfortable.  
- **Data Usage**: Profiles are stored only locally and are not personally identifiable.

### 3️⃣ **Learn Page (learn.html)**  
This page provides **general information about individuals' legal rights** during interactions with law enforcement. Key topics include:  
- The **right to remain silent**  
- The **right to refuse searches**  
- The **right to legal representation**  
- Guidelines for **interactions with ICE**  

### 4️⃣ **SOS Page (sos.html)**  
The **SOS Page** is the heart of the app. It provides:  
- **Pre-generated Questions:** Four tailored questions based on the user's profile.  
- **Dynamic Input:** Users can enter their own questions to get advice about their rights in unfamiliar situations.  

###  **How It Works **  
1. **User Profile Setup**: The app collects optional demographic data to tailor advice.  
2. **Question Generation**: The SOS Page uses simple rules based on legal best practices to show relevant information.  
3. **Database Integration**: **MongoDB** stores user profiles and tracks common scenarios.  
4. **Frontend Interactivity**: JavaScript dynamically generates questions based on the user's input.

---

**Built for HackHer 413** | **With ❤️ by @mariaigartua**

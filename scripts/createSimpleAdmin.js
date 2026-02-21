const mongoose = require('mongoose');
const User = require('../src/models/User');
require('dotenv').config();

const createSimpleAdmin = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Create simple admin user
    const adminUser = await User.create({
      username: 'admin',
      email: 'admin@udemy.com',
      password: 'Admin123',
      role: 'admin',
      profile: {
        firstName: 'Admin',
        lastName: 'User'
      },
      isActive: true,
      emailVerified: true
    });

    console.log('Simple admin user created:', adminUser);
    console.log('Login Credentials:');
    console.log('Username: admin');
    console.log('Password: Admin123');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createSimpleAdmin();

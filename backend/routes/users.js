const express = require('express');
const router = express.Router();
const User = require('../models/User');
const fetchuser = require('../middleware/fetchuser');

// Update user profile
router.put('/:id', fetchuser, async (req, res) => {
    const userId = req.params.id;
    const updates = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) return res.status(404).json({ message: 'User not found' });

        // Update fields
        user.name = updates.name || user.name;
        user.email = updates.email || user.email;
        user.preferences = updates.preferences || user.preferences;

        // Update avatar if name changed
        if (updates.name) {
            user.avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(updates.name)}&background=6B9AC4&color=fff`;
        }

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ message: 'Failed to update profile' });
    }
});

// Update user stats
router.put('/:id/stats', fetchuser, async (req, res) => {
    const userId = req.params.id;
    const stats = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) return res.status(404).json({ message: 'User not found' });

        user.stats = {
            ...user.stats,
            ...stats
        };

        user.lastAssessment = new Date().toISOString();

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        console.error('Update stats error:', error);
        res.status(500).json({ message: 'Failed to update stats' });
    }
});

module.exports = router;
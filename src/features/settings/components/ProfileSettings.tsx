import React, { useState } from 'react';
import { Button } from '../../../ui/Button';
import { Input } from '../../../ui/Input';
import { User, Mail, Shield } from 'lucide-react';
import './ProfileSettings.css';

export const ProfileSettings = () => {
    const [formData, setFormData] = useState({
        fullName: 'Admin User',
        email: 'admin@security.corp',
        role: 'Senior Security Analyst',
        bio: 'Focusing on threat intelligence and incident response.'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="profile-settings">
            <div className="profile-header">
                <div className="profile-avatar-large">AD</div>
                <div className="profile-info-header">
                    <h3 className="profile-name">{formData.fullName}</h3>
                    <span className="profile-role">{formData.role}</span>
                </div>
            </div>

            <div className="profile-form">
                <div className="form-group">
                    <Input
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        leftIcon={<User size={16} />}
                        fullWidth
                    />
                </div>

                <div className="form-group">
                    <Input
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        leftIcon={<Mail size={16} />}
                        fullWidth
                    />
                </div>

                <div className="form-group">
                    <label className="ui-input-label">Role</label>
                    <div className="ui-input-wrapper ui-input-wrapper--full">
                        <div className="ui-input-container">
                            <span className="ui-input-icon ui-input-icon--left"><Shield size={16} /></span>
                            <input
                                className="ui-input ui-input--disabled ui-input--has-left-icon"
                                value={formData.role}
                                disabled
                            />
                        </div>
                    </div>
                    <span className="form-hint">Role cannot be changed by user. Contact IT support.</span>
                </div>

                <div className="form-actions">
                    <Button>Save Changes</Button>
                    <Button variant="ghost">Cancel</Button>
                </div>
            </div>
        </div>
    );
};

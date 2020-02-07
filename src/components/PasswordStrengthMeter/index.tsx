import * as React from 'react';
import { passwordEntropyStep } from '../../api/config';

export interface PasswordStrengthMeterProps {
    currentPasswordEntropy: number;
    minPasswordEntropy: number;
    password: string;
    passwordFirstSolutions: boolean;
    passwordSecondSolutions: boolean;
    passwordThirdSolutions: boolean;
    passwordPopUp: boolean;
}

export const PasswordStrengthMeter: React.FunctionComponent<PasswordStrengthMeterProps> = props => {
    const passwordComplite = props.passwordSecondSolutions && props.passwordFirstSolutions && props.passwordThirdSolutions;
    const AVG_PASSWORD_ENTROPY = props.minPasswordEntropy + passwordEntropyStep();
    const STRONG_PASSWORD_ENTROPY = props.minPasswordEntropy + passwordEntropyStep() * 2;

    const renderPasswordMeter = [
        <div className="pg-password-strength-meter__too-weak"></div>,
        <div className="pg-password-strength-meter__weak"></div>,
        <div className="pg-password-strength-meter__good"></div>,
        <div className="pg-password-strength-meter__strong"></div>,
        <div className="pg-password-strength-meter__very-strong"></div>,
    ];

    let passwordStrengthMeterLength = -1;

    if (props.currentPasswordEntropy < props.minPasswordEntropy) {
        passwordStrengthMeterLength = 0;
    }

    if ((props.currentPasswordEntropy < props.minPasswordEntropy && props.passwordFirstSolutions) || props.passwordFirstSolutions) {
        passwordStrengthMeterLength = 1;
    }

    if (passwordComplite) {
        if (props.currentPasswordEntropy >= props.minPasswordEntropy && props.currentPasswordEntropy < AVG_PASSWORD_ENTROPY) {
            passwordStrengthMeterLength = 2;
        }

        if (props.currentPasswordEntropy >= AVG_PASSWORD_ENTROPY && props.currentPasswordEntropy < STRONG_PASSWORD_ENTROPY) {
            passwordStrengthMeterLength = 3;
        }

        if (props.currentPasswordEntropy >= STRONG_PASSWORD_ENTROPY) {
            passwordStrengthMeterLength = 4;
        }
    }

    return (
        <div className="pg-password-strength">
            <div className="pg-password-strength-meter">
                {renderPasswordMeter.map((item, index) => passwordStrengthMeterLength >= index ? item : null)}
            </div>
            {props.passwordPopUp ?
            <div className="pg-password-pop-up">
                <div className="pg-password-pop-up__strength">
                    <div className="pg-password-pop-up__strength-title">
                        Password Strength
                    </div>
                    <div className={`pg-password-pop-up__strength-status ${passwordStrengthClassName(passwordStrengthMeterLength)}`}>
                        {passwordStrengthStatus(passwordStrengthMeterLength)}
                    </div>
                </div>
                {!(props.passwordFirstSolutions && props.passwordSecondSolutions && props.passwordThirdSolutions) && <div className={'pg-password-pop-up__help'}>
                    <span className="pg-password-pop-up__help-title">What influence on password strength</span>
                    {!props.passwordFirstSolutions && <span className="pg-password-pop-up__help-text">At least 8 characters</span>}
                    {!props.passwordSecondSolutions && <span className="pg-password-pop-up__help-text">At least One upper case and lower case letter</span>}
                    {!props.passwordThirdSolutions && <span className="pg-password-pop-up__help-text">At least One digit</span>}
                </div>}
            </div> : null}
        </div>
    );
};

const passwordStrengthClassName = (passwordStrengthMeterLength: number) => {
    switch (passwordStrengthMeterLength) {
        case 0: return 'pg-password-pop-up__too-weak';
        case 1: return 'pg-password-pop-up__weak';
        case 2: return 'pg-password-pop-up__good';
        case 3: return 'pg-password-pop-up__strong';
        case 4: return 'pg-password-pop-up__very-strong';
        default: return 'pg-password-pop-up__too-weak';
    }
};

const passwordStrengthStatus = (passwordStrengthMeterLength: number) => {
    switch (passwordStrengthMeterLength) {
        case 0: return 'TOO WEAK';
        case 1: return 'WEAK';
        case 2: return 'GOOD';
        case 3: return 'STRONG';
        case 4: return 'VERY STRONG';
        default: return 'TOO WEAK';
    }
};

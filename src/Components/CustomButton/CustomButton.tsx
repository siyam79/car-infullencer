
"use client";
import { CustomButtonProps } from '@/Types'
import Image from 'next/image'
import React from 'react'

export default function CustomButton({isDisable, btnType, buttonStyle, textStyles, title, rightIcon, handleClick} :CustomButtonProps) {
    return (
        <div>
            <button
                disabled={isDisable}
                type={btnType || "button"}
                className={`custom-btn ${buttonStyle}`}
                onClick={handleClick}
            >
                <span className={`flex-1 ${textStyles}`}>{title}</span>
                {rightIcon && (
                    <div className="relative w-6 h-6">
                        <Image
                            src={rightIcon}
                            alt="arrow_left"
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
            </button>
        </div>
    )
}

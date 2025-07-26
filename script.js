tailwind.config = {
    theme: {
        extend: {
            animation: {
                'float': 'float 4s ease-in-out infinite',
                'gradient-x': 'gradient-x 4s ease-in-out infinite',
                'gradient-x-slow': 'gradient-x 6s ease infinite',
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'gradient-x': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                }
            }
        }
    }
} 
import { ThemeOptions } from '@mui/material'

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string
        }
        
    }
    
    interface ThemeOptions {
        status?: {
            danger?: string
        }
    }
    
    interface TypeText {
        hint: string
    }
}

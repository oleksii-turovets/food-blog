import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import './WriteMessage.scss'
import TitleWithLinesAround from 'components/TitleWithLinesAround/TitleWithLinesAround'

type Props = {}

type Message = {
    name: string
    email: string
    subject: string
    message: string
}

const WriteMessage = (props: Props) => {
    const [isMessageSent, setIsMessageSent] = useState<boolean>(true)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [newMessage, setNewMessage] = useState<Message>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        inputType: keyof Message
    ) => {
        setNewMessage((prevState) => ({
            ...prevState,
            [inputType]: e.target.value,
        }))
    }

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetch(
            'https://my-json-server.typicode.com/oleksii-turovets/fake-server/messages',
            {
                method: 'POST',
                body: JSON.stringify(newMessage),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        )
            .then(() => {
                setIsMessageSent(true)
                setIsSuccess(true)
            })
            .then(() => {
                setNewMessage({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                })
                setTimeout(() => setIsMessageSent(false), 5000)
            })
            .catch(() => {
                setIsMessageSent(true)
                setIsSuccess(false)
                setTimeout(() => setIsMessageSent(false), 5000)
            })
    }

    return (
        <form onSubmit={sendMessage} className="message-form">
            <div className="message-form-title">
                <TitleWithLinesAround>Leave a message</TitleWithLinesAround>
            </div>

            <div className="message-form-user">
                <TextField
                    label="Name"
                    value={newMessage.name}
                    onChange={(e) => handleInput(e, 'name')}
                    required
                    className="user-field name-field"
                />
                <TextField
                    label="Email"
                    type="email"
                    value={newMessage.email}
                    onChange={(e) => handleInput(e, 'email')}
                    // required
                    className="user-field email-field"
                />
                <TextField
                    label="Subject"
                    value={newMessage.subject}
                    onChange={(e) => handleInput(e, 'subject')}
                    className="user-field website-field"
                />
            </div>
            <div className="message-form-message">
                <TextField
                    variant="outlined"
                    multiline
                    label="Your message"
                    minRows={5}
                    fullWidth
                    value={newMessage.message}
                    onChange={(e) => handleInput(e, 'message')}
                    required
                    className="message-field"
                />
            </div>
            <div className="message-form-btn-submit">
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        display: 'block',
                        minWidth: '120px',
                        margin: '0 auto',
                        padding: '12px 20px',
                        color: 'text.primary',
                        backgroundColor: '#f5f5f5',
                        transition: 'all 0.3s',
                        boxShadow: 'none',
                        '&:hover': {
                            color: 'secondary.contrastText',
                            backgroundColor: 'secondary.main',
                        },
                    }}
                >
                    <Typography
                        component={'span'}
                        variant="h6"
                        lineHeight={'auto'}
                        color={'inherit'}
                    >
                        Submit
                    </Typography>
                </Button>
            </div>
            <Typography
                component={'div'}
                variant={'body1'}
                align="center"
                mt={28}
                color={'text.hint'}
                sx={{
                    opacity: isMessageSent ? '100%' : '0%',
                    transition: 'all 0.3s',
                }}
            >
                {isSuccess
                    ? 'Your message sent. We will answer soon!'
                    : 'Something went wrong! Please try again or use another method of communication.'}
            </Typography>
        </form>
    )
}
export default WriteMessage

import {
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useState } from 'react'
import { ArticleComment, addComment } from 'redux/commentsReducer'
import './LeaveComment.scss'
import { changeUserData } from 'redux/userReducer'
import TitleWithLinesAround from 'components/TitleWithLinesAround/TitleWithLinesAround'

type Props = {
    id: number
}

const LeaveComment = ({ id }: Props) => {
    const userData = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    const [newComment, setNewComment] = useState<ArticleComment>({
        name: userData.name !== undefined ? userData.name : '',
        email: userData.email !== undefined ? userData.email : '',
        website: userData.website !== undefined ? userData.website : '',
        comment: '',
    })

    const [userSavingChecked, setUserSavingChecked] = useState<boolean>(true)

    const handleUserSaving = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserSavingChecked(event.target.checked)
    }

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        inputType: keyof ArticleComment
    ) => {
        setNewComment((prevState) => ({
            ...prevState,
            [inputType]: e.target.value,
        }))
    }

    const sendComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(addComment({ id, newComment }))

        userSavingChecked
            ? dispatch(
                  changeUserData(
                      Object.fromEntries(
                          Object.entries(newComment).filter(
                              (item) =>
                                  (item[0] === 'name' ||
                                      item[0] === 'email' ||
                                      item[0] === 'website') &&
                                  item[1] !== undefined
                          )
                      )
                  )
              )
            : void 0

        userSavingChecked
            ? setNewComment((prevState) => ({
                  ...prevState,
                  comment: '',
              }))
            : setNewComment({
                  name: userData.name !== undefined ? userData.name : '',
                  email: userData.email !== undefined ? userData.email : '',
                  website:
                      userData.website !== undefined ? userData.website : '',
                  comment: '',
              })
    }

    return (
        <form onSubmit={sendComment} className="comment-form">
            <div className="comment-form-title">
                <TitleWithLinesAround>
                    Leave a comment
                </TitleWithLinesAround>
            </div>
            <div className="comment-form-comment">
                <TextField
                    variant="outlined"
                    multiline
                    label="Your Comment"
                    minRows={5}
                    fullWidth
                    value={newComment.comment}
                    onChange={(e) => handleInput(e, 'comment')}
                    required
                    className="comment-field"
                />
            </div>
            <div className="comment-form-user">
                <TextField
                    label="Name"
                    value={newComment.name}
                    onChange={(e) => handleInput(e, 'name')}
                    required
                    className="user-field name-field"
                />
                <TextField
                    label="Email"
                    type="email"
                    value={newComment.email}
                    onChange={(e) => handleInput(e, 'email')}
                    required
                    className="user-field email-field"
                />
                <TextField
                    label="Website"
                    type="url"
                    value={newComment.website}
                    onChange={(e) => handleInput(e, 'website')}
                    className="user-field website-field"
                />
            </div>
            <div className="comment-form-user-checkbox">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={userSavingChecked}
                            onChange={handleUserSaving}
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 16 },
                                padding: '0 9px',
                            }}
                        />
                    }
                    label={
                        'Save my name, email, and website in this browser for the next time I comment.'
                    }
                    componentsProps={{
                        typography: {
                            variant: 'body1',
                            lineHeight: 1.4,
                            color: 'text.secondary',
                        },
                    }}
                />
            </div>
            <div className="comment-form-btn-submit">
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
        </form>
    )
}
export default LeaveComment

import {
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useState } from 'react'
import { ArticleComment, addComment } from 'redux/commentsReducer'
import './LeaveComment.scss'
import { changeUserData } from 'redux/userReducer'

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
            <Typography
                component={'h3'}
                variant="h4"
                className="comment-form-title"
                align="center"
            >
                Leave a comment
            </Typography>
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
                    value={newComment.email}
                    onChange={(e) => handleInput(e, 'email')}
                    required
                    className="user-field email-field"
                />
                <TextField
                    label="Website"
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
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                        />
                    }
                    label={
                        'Save my name, email, and website in this browser for the next time I comment.'
                    }
                />
            </div>
            <div className="comment-form-btn-submit">
                <Button variant="outlined" type="submit">
                    Submit
                </Button>
            </div>
        </form>
    )
}
export default LeaveComment

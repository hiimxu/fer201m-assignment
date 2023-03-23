import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    TextField,
    Stack,
    Autocomplete,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { listTypeMovieSelector } from '~/redux/selectors/typeMovieSelector';
import { getListTypeMovie } from '~/redux/actions/creators/typeMovie';

type AppDispatch = ThunkDispatch<null, any, AnyAction>;

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

type Movie = {
    imageurl: string;
    title: string;
    release: string;
    typeId: string;
    description: string;
};

export default function AddMovie({ isOpen, onClose }: Props) {
    const { loading, data: category } = useSelector(listTypeMovieSelector);

    const dispatch: AppDispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Movie>();

    React.useEffect(() => {
        dispatch(getListTypeMovie());
    }, [dispatch]);

    return (
        <Dialog fullWidth maxWidth="md" open={isOpen} onClose={onClose}>
            <DialogTitle>Create movie</DialogTitle>
            <DialogContent>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <Box
                        component={'form'}
                        sx={{
                            p: '20px 0',
                        }}
                    >
                        <Stack spacing={3}>
                            <TextField fullWidth label="Image URL" />
                            <TextField fullWidth label="Title" />
                            <TextField fullWidth label="Release" />
                            <Autocomplete
                                disablePortal
                                fullWidth
                                id="combo-box-demo"
                                options={category}
                                getOptionLabel={(option: any) => option?.name}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Category"
                                        fullWidth
                                    />
                                )}
                            />
                            <TextField fullWidth label="Image URL" />
                        </Stack>
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                <Button variant="contained">Submit</Button>
                <Button variant="outlined" color="error">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

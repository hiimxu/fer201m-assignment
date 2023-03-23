import React from 'react';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { listMovieSelector } from '~/redux/selectors/movieSelector';
import { getListMovie } from '~/redux/actions/creators/movies';

import {
    Box,
    TableContainer,
    TextField,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useDebounce from '~/hooks.useDebounce';
import { logout } from '~/redux/actions/creators/auth';
import AddMovie from './components/AddMovie';

const Wrapper = styled(Box)({
    display: 'flex',
    marginTop: '25px',
    justifyContent: 'center',
});

const Item = styled(Box)({
    width: '80%',
});
const CardHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
});
const TextSearch = styled(Box)({
    width: '400px',
    margin: '0 auto',
});

const BtnAdd = styled(Box)({
    marginRight: '20px',
});
const TableData = styled(TableContainer)({
    width: '100%',
    marginTop: '30px',
});
const THead = styled(TableHead)({
    backgroundColor: 'rgba(228,110, 30, 0.9)',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: 'bold',
});
const TbCell = styled(TableCell)({
    backgroundColor: 'rgba(0,0, 0, 0.05)',
    fontSize: '16px',
    fontWeight: '500',
});

type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export default function ManageMovie() {
    const [search, setSearch] = React.useState<string>('');

    const searchValue = useDebounce(search, 500);

    //Dialog
    const [openAdd, setOpenAdd] = React.useState<boolean>(false);

    const { data: movies } = useSelector(listMovieSelector);

    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        dispatch(
            getListMovie({
                search: searchValue,
                typeMovieId: '',
            }),
        );
    }, [dispatch, searchValue]);

    return (
        <Wrapper>
            <>
                <AddMovie isOpen={openAdd} onClose={() => setOpenAdd(false)} />
            </>
            <Item>
                <h2>List Movies</h2>
                <Button color="primary" onClick={() => dispatch(logout())}>
                    Logout
                </Button>
                <CardHeader>
                    <TextSearch>
                        <TextField
                            fullWidth
                            label="Search movie by name ..."
                            variant="outlined"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </TextSearch>
                    <BtnAdd>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setOpenAdd(true)}
                        >
                            Add New
                        </Button>
                    </BtnAdd>
                </CardHeader>

                <TableData>
                    <Table>
                        <THead>
                            <TableRow>
                                <TbCell>Name</TbCell>
                                <TbCell>Year</TbCell>
                                <TbCell>Category Movie</TbCell>
                                <TbCell>Action</TbCell>
                            </TableRow>
                        </THead>
                        <TableBody>
                            {movies?.map((m: any) => (
                                <TableRow key={m._id}>
                                    <TbCell>{m.title}</TbCell>
                                    <TbCell>{m.release}</TbCell>
                                    <TbCell>{m.type.name}</TbCell>
                                    <TbCell>
                                        <IconButton
                                            aria-label="edit"
                                            color="primary"
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            aria-label="delete"
                                            color="error"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TbCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableData>
            </Item>
        </Wrapper>
    );
}

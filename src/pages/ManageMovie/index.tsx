import React from 'react';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { listMovieSelector } from '~/redux/selectors/movieSelector'
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
    Button
} from '@mui/material'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const Wrapper = styled(Box)({
    display: 'flex',
    marginTop: '25px',
    justifyContent: 'center',
});


const Item = styled(Box)({
    width: '80%',
})

const TextSearch = styled(Box)({
    width: '400px',
    margin: '0 auto'
})

const BtnAdd = styled(Box)({
    display: 'flex',
    justifyContent: 'end',

})
const TableData = styled(TableContainer)({
    width: '100%',
    marginTop: '30px',
})
const TbCell = styled(TableCell)({
    backgroundColor: 'rgba(0,0, 0, 0.05)',
    fontSize: '16px',
    fontWeight: '500',
})


type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export default function ManageMovie() {

    const { data: movies } = useSelector(listMovieSelector);


    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        dispatch(
            getListMovie({
                search: '',
                typeMovieId: '',
            }),
        );
    }, [dispatch])
    return (

        <Wrapper>
            <Item>
                <h2>List Movies</h2>
                <TextSearch>
                    <TextField
                        fullWidth
                        label="Search movie by name ..."
                        variant="outlined"
                    />
                </TextSearch>
                <BtnAdd>
                    <Button variant="contained" color="success">Add New</Button>
                </BtnAdd>

                <TableData>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TbCell>Name</TbCell>
                                <TbCell >Year</TbCell>
                                <TbCell >Category Movie</TbCell>
                                <TbCell >Action</TbCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                movies?.map((m:any) => (
                                    <TableRow key={m._id}>
                                        <TbCell >{m.title}</TbCell>
                                        <TbCell >{m.release}</TbCell>
                                        <TbCell >{m.type.name}</TbCell>
                                        <TbCell >
                                            <ModeEditOutlineRoundedIcon />
                                            <DeleteRoundedIcon />
                                        </TbCell>
                                    </TableRow>
                                ))
                            }

                        </TableBody>
                    </Table>
                </TableData>
            </Item>



        </Wrapper>

    )
}

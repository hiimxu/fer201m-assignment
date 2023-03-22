import React from 'react';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


import { listTypeMovieSelector } from '~/redux/selectors/typeMovieSelector';

import { getListTypeMovie } from '~/redux/actions/creators/typeMovie';

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
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';


const Wrapper = styled(Box)({
    display: 'flex',
    marginTop: '25px',
    justifyContent: 'center',
});


const Item = styled(Box)({
    width: '80%',
})
const CardHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',


})
const TextSearch = styled(Box)({
    width: '400px',
    margin: '0 auto',
})

const BtnAdd = styled(Box)({
    marginRight: '20px',

})
const TableData = styled(TableContainer)({
    width: '100%',
    marginTop: '30px',
})
const THead = styled(TableHead)({
    backgroundColor: 'rgba(228,110, 30, 0.9)',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: 'bold',
})
const TbCell = styled(TableCell)({
    backgroundColor: 'rgba(0,0, 0, 0.05)',
    fontSize: '16px',
    fontWeight: '500',
})

type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export default function ManageTypeMovie() {

    const { data } = useSelector(listTypeMovieSelector);

    console.log(data);

    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getListTypeMovie());
    }, [dispatch]);

    return (
        <Wrapper>
            <Item>
                <h2>List Category Movies</h2>
                <CardHeader>
                    <TextSearch>
                        <TextField
                            fullWidth
                            label="Search tyoe movie by name ..."
                            variant="outlined"
                        />
                    </TextSearch>
                    <BtnAdd>
                        <Button variant="contained" color="success">Add New</Button>
                    </BtnAdd>
                </CardHeader>


                <TableData>
                    <Table>
                        <THead>
                            <TableRow>
                                <TbCell>Name</TbCell>
                                <TbCell >Action</TbCell>
                            </TableRow>
                        </THead>
                        <TableBody>

                            {
                                data?.map((d: any) => (
                                    <TableRow key={d._id}>
                                        <TbCell >{d.name}</TbCell>
                                        <TbCell >
                                            <IconButton aria-label="edit"
                                                color="primary">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete"
                                                color="error">
                                                <DeleteIcon />
                                            </IconButton>

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




// component => action =>reducer =>store=>selector=>component
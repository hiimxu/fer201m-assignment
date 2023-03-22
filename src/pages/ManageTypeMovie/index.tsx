import React from 'react';
import { styled } from '@mui/system';


import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


import { getListTypeMovie } from '~/redux/actions/creators/typeMovie';
import { listTypeMovieSelector} from '~/redux/selectors/typeMovieSelector';


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

export default function ManageTypeMovie()  {

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

                <TableData>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TbCell>Name</TbCell>
                                <TbCell >Action</TbCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                data?.map((d:any) => (
                                    <TableRow key={d._id}>
                                        <TbCell >{d.name}</TbCell>
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


// component => action =>reducer =>store=>selector=>component
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
};

export default function SuccessDialog({
    isOpen,
    onClose,
    title,
    content,
}: Props) {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

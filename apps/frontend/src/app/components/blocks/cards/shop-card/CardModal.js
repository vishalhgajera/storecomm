import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Box } from '@mui/joy';

export default function CardModal(props) {

  const  {item, open,setOpen} = props.data;

  return (

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={(e) => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <Box sx={{maxWidth:'100%'}}>
          <figure>
            <img
              style={{maxWidth:'100%'}}
              src={item.category.image}
              srcSet={item.category.image}
              loading="lazy"
              alt="Yosemite by Casey Horner"
            />
          </figure>
          </Box>
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {item.title}
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            {item.description}
          </Typography>
        </Sheet>
      </Modal>
  );
}
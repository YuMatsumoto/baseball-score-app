import { Button, Container, TextField, Typography } from '@mui/material';

function Top() {
  return (
    <Container
      sx={{
        width: '100vw',
        height: '100vh',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">スコア管理アプリ</Typography>
      <TextField label="ID" variant="outlined" />
      <TextField label="パスワード" variant="outlined" />
      <Button variant="contained" size="large">
        ログイン
      </Button>
    </Container>
  );
}

export { Top };

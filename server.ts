//express를 import 한다. JavaScript에서는 'const express = require('express')'가 일반적이다.
import express, { Request, Response } from 'express';
const app = express();

//외부 접근시 발생하는 cors를 해제하기 위한 라이브러리이다.
const cors = require('cors');

//서버에 사용될 port 번호이다. 현재는 환경 변수 파일이 없으므로 3001이 된다.
const PORT = process.env.PORT || 3001;

//express에 cors 라이브러리를 삽입한다.
app.use(cors());

//GET API를 정의한다.
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.get('/user/1', (req: Request, res: Response) => {
  res.json({
    id: 1,
    name: 'yusang',
    major: 'computer',
  });
});

//서버 가동 시 실행하는 동작이다.
app.listen(PORT, () => console.log('server running..'));

// /* eslint-disable consistent-return */
// import { Router } from 'express';
// import bcrypt from 'bcrypt';
// import { User } from '../db/models';

// const router = Router();

// router.route('/registration')
//   .post(async (req, res) => {
//     console.log(req.body);
//     const { name, password, email } = req.body;
//     if (name && password && email) {
//       try {
//         const [user, created] = await User.findOrCreate({
//           where: { email },
//           default: { hashpass: await bcrypt.hash(password, 10) },
//         });
//         if (created) {
//           console.log('22222', created);
//           const sessionUser = JSON.parse(JSON.stringify(user));
//           console.log('33', sessionUser);
//           delete sessionUser.hashpass;
//           req.session.user = sessionUser;
//           return res.json(sessionUser);
//         }
//       } catch (e) {
//         console.log(e);
//         return res.sendStatus(500);
//       }
//     } else {
//       return res.sendStatus(500);
//     }
//   });

// router.route('/authorization')
//   .post(async (req, res) => {
//     const { email, password } = req.body;
//     if (email && password) {
//       try {
//         const user = await User.findOne({ where: { email } });
//         if (await bcrypt.compare(password, user.hashpass)) {
//           const sessionUser = JSON.parse(JSON.stringify(user));
//           delete sessionUser.hashpass;
//           req.session.user = sessionUser;
//           return res.json(sessionUser);
//         }
//         return res.sendStatus(401);
//       } catch (e) {
//         console.log(e);
//         return res.sendStatus(500);
//       }
//     }
//     return res.sendStatus(500);
//   });

// router.route('/check')
//   .post(async (req, res) => {
//     if (req.session.user) {
//       return res.json(req.session.user);
//     }
//     return res.sendStatus(401);
//   });

// router.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.clearCookie('sid').sendStatus(200);
// });

// export default router;

const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/registration', async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { name, password: await bcrypt.hash(password, 10) },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.hashpass)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.hashpass;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;

import { Router } from 'express';
import { Cafe } from '../db/models';

const router = Router();

router.route('/')
  .post(async (req, res) => {
    const { input } = req.body;
    const newCafe = await Cafe.create({ title: input });
    res.json(newCafe);
  })
  .get(async (req, res) => {
    const cafes = await Cafe.findAll();
    res.json(cafes);
  });

router.route('/:id')
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await Cafe.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  });

router.put('/Cafe/:id', async (req, res) => {
  const { id } = req.params;
  const cafe = await Cafe.findByPk(id);
  cafe.status = !cafe.status;
  cafe.save();
  res.sendStatus(200);
});

router.patch('/Cafe/:id', async (req, res) => {
  const { id } = req.params;
  await Cafe.update(
    req.body,
    { where: { id } },
  );
  const result = await Cafe.findByPk(id);
  const data = JSON.parse(JSON.stringify(result));
  res.json({ ...data, User: { id: res.locals.user.id, name: res.locals.user.name } });
});

export default router;

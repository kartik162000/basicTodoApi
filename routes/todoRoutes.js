const express=require('express');
const {getAllTask,getTaskById,createTask,deleteTask,updateByPut,updateByPatch}=require('../controller/todoController');
const router=express.Router();

router.get('/',getAllTask);
router.get('/:id',getTaskById);
router.post('/',createTask);
router.delete('/:id',deleteTask);
router.put('/:id',updateByPut);
router.patch('/:id',updateByPatch);

module.exports=router;
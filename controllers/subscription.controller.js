import Subscription from "../models/subscription.model.js";
import {workflowClient} from "../config/upstash.js";
import {SERVER_URL} from "../config/env.js";

export const createSubscription =async (req,res,next)=>{
    try{
        const subscription = await Subscription.create({
            ...req.body,
            user:req.user._id
        });
        const { workflowRunId } = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription.id,
            },
            headers: {
                'content-type': 'application/json',
            },
            retries: 0,
        })
        res.status(201).json({success:true,data: {subscription,workflowRunId}});
    }
    catch(err){
        next(err);
    }
}

export const getUserSubscriptions =async (req,res,next)=>{
    try{
     if(req.user.id !== req.param.id){
         const error = new Error('You are not the owner of this account');
         error.status = 401;
         throw error;
     }
     const sub = await Subscription.find({user:req.params.id});

     res.status(200).json({success:true,data:sub});
    }
    catch(err){
        next(err);
    }
}


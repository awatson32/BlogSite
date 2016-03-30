import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostsRepository from '../../repositories/posts/posts.repo';

export default class SinglepostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context = {
        post: <models.IPost>{}
    };
    
    constructor(private postRepo: PostsRepository) {
        super();
    }
    
    navigatedTo(parameters: any): void {
        let idValue: string = parameters.someid;
        this.postRepo.getPost(idValue).then((success) => {
            this.context.post = success;
        }, (err) => {
            console.log(err);
        });
    }
}

register.viewControl('singlepost-vc', SinglepostViewControl, [PostsRepository]);

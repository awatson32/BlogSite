import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostsRepository from '../../repositories/posts/posts.repo';
import HomeViewControl from '../home/home.vc';

export default class NewentryViewControl extends BaseViewControl {
    templateString: string = require('./newentry.vc.html');

    context = {
        title: '',
        author: '',
        content: ''
    };
    
    constructor(private postRepo: PostsRepository) {
        super();
    }
    
    submit(): void {
        console.log('We are posting!');
        let blogPost: models.IPost = {
            title: this.context.title,
            author: this.context.author,
            content: this.context.content
        };
        this.postRepo.submitPost(blogPost).then((success) => {
            console.log(success);
            this.navigator.navigate(HomeViewControl);
        }, (err) => {
            console.log(err);
        })
    }
}

register.viewControl('newentry-vc', NewentryViewControl, [PostsRepository]);

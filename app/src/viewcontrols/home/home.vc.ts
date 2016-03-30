import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostsRepository from '../../repositories/posts/posts.repo';
import NewEntryViewControl from '../newentry/newentry.vc';
import SinglePostViewControl from '../singlepost/singlepost.vc';

export default class HomeViewControl extends BaseViewControl {
    
    constructor(private postRepo: PostsRepository) {
        super();
    };
    templateString: string = require('./home.vc.html');
     
    context: any = {
        posts: <Array<models.IPost>>[],
        composeView: NewEntryViewControl
    };
    
    navigatedTo(): void {
        this.postRepo.getPosts().then((posts) => {
            console.log(posts);
            this.context.posts = posts;
        }, (err) => {
            console.log(err);
        })
    }
    
    newPost(): void {
        this.navigator.navigate(NewEntryViewControl);
    }
    
    singlePost(postId:string): void {
        console.log('This is working');
        this.navigator.navigate(SinglePostViewControl, {
            parameters: {
                someId: postId
            }
        });
    }
    
}

register.viewControl('home-vc', HomeViewControl, [PostsRepository]);

import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import EntriesService from '../../services/entries/entries.svc'

export default class PostsRepository extends BaseRepository {
    
    constructor(private entriesService: EntriesService) {
        super();
    }
    
    getPosts(): async.IThenable<Array<models.IPost>> {
        return this.entriesService.getPosts();
    }
    
    submitPost(post: models.IPost): async.IThenable<string> {
        return this.entriesService.submitPost(post);
    } 
    
    getPost(postId: string): async.IThenable<models.IPost> {
        return this.entriesService.getPost(postId);
    }
}

register.injectable('posts-repo', PostsRepository, [EntriesService]);

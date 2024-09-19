import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const newPost = postsService.create(post);
    expect(newPost).toEqual(postsService.find(newPost.id));
    
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const existingPost = postsService.create(post);
    const foundPost = postsService.find(existingPost.id);
    expect(foundPost).toEqual(existingPost);
  });
});
import Vuex from 'vuex';
import { mount } from '@vue/test-utils';
import postModule from '@/store/module/post.module';
import Home from '@/views/HomeView.vue';

describe('tests for the Home view component', () => {
  let wrapper;

  beforeEach(() => {
    const store = new Vuex.Store({
      // eslint-disable-next-line max-len
      modules: { post: { ...postModule, state: { postlist: { posts: [] }, historylist: { history: [] } } } },
    });

    wrapper = mount(Home, {
      stubs: ['font-awesome-icon'],
      store,
    });

    wrapper.vm.onBackgroundAnimationEnd();
  });

  it('records each post movement in the time travel section', () => {
    wrapper.find('.down-arrow-container').trigger('click');
    let string = wrapper.find('.time-travel-item').text();
    expect(string.startsWith('Moved post 1 from index 0 to index 1')).toBe(true);
    wrapper
      .findAll('.down-arrow-container')
      .at(1)
      .trigger('click');

    string = wrapper
      .findAll('.time-travel-item')
      .at(1)
      .text();
    expect(string.startsWith('Moved post 1 from index 1 to index 2')).toBe(true);
  });

  it('restores posts listing to a previous state after clocking on the time travel button', () => {
    wrapper.find('.down-arrow-container').trigger('click');
    wrapper
      .findAll('.down-arrow-container')
      .at(1)
      .trigger('click');
    wrapper
      .findAll('.time-travel-btn')
      .at(0)
      .trigger('click');
    expect(
      wrapper
        .findAll('.post-item-container')
        .at(1)
        .text(),
    ).toBe('This is post 1');
  });
});

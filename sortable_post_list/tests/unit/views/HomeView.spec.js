import { shallowMount } from '@vue/test-utils';
import Home from '@/views/HomeView.vue';

describe('tests for the Home view component', () => {
  it('renders screen animationTimingFunction', () => {
    const msg = 'Soratble Post List';
    const wrapper = shallowMount(Home, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

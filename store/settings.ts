import { create } from 'zustand';
import { $http } from '@/api';


interface ISettings {
  address: string;
  contact_email: string;
  facebook_link: string;
  instagram_link: string;
  twitter_link: string;
  website_bio: string;
  website_name: string;
  phone: string;

}
interface IAbout {
  description: string;
  id: number;
  image: string;
  meta_description: string;
  title: string

}

interface State {
  settings: ISettings,
  aboutPage: IAbout
}

interface Actions {
  getSettings: () => Promise<unknown>;
  getAboutPage: () => Promise<unknown>;
}

export const useSettingsStore = create<State & Actions>((set) => ({
  settings: {
    address: '',
    contact_email: '',
    facebook_link: '',
    instagram_link: '',
    twitter_link: '',
    website_bio: '',
    website_name: '',
    phone: ''
  },
  aboutPage: {
    description: '',
    id: 0,
    image: '',
    meta_description: '',
    title: ''
  },


  getSettings: async () => {
    const res = await $http.get<{ data: { data: ISettings } }>({ url: 'settings' })
    const { data } = res.data
    set((state) => ({ ...state, settings: data }))
  },
  getAboutPage: async () => {
    const res = await $http.get<{ data: { data: IAbout } }>({ url: 'get_page/about' })
    const { data } = res.data
    set((state) => ({ ...state, aboutPage: data }))
  },
}));

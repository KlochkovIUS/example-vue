import { inject, InjectionKey, ref } from 'vue';
import { ISwapiService } from '@/service/models';
import { Ref, UnwrapRef } from '@vue/reactivity';
import SwapiService from '@/service/swapi-service';

export const swapiServiceKey = Symbol() as InjectionKey<Ref<UnwrapRef<ISwapiService>>>;
export const useSwapiService = () => inject(swapiServiceKey, ref(new SwapiService()));

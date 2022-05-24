import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.c-r-m.caption'),
          title: i18n.t('forms.application.sitemap.c-r-m.title'),
          children: [{
            link: 'i-i-s-c-r-m-employer-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-employer-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-employer-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-c-r-m-lead-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-lead-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-lead-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-c-r-m-contact-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-contact-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-contact-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-c-r-m-administrator-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-administrator-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-administrator-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-c-r-m-activity-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-activity-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-activity-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})
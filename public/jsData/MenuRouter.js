export default {
  menuList: [{
      name: '产品',
      router: 'Product',
      list: [{
          name: '科学家抗衰老',
          router: 'ScientistsFightAging'
        },
        {
          name: 'NMN时代',
          router: 'NMNTimes'
        }, {
          name: '爱健康产品及使用',
          router: 'iHeathExplain'
        }, {
          name: '好转反应',
          router: 'ImprovementReaction'
        }, {
          name: '产品见证',
          router: 'ProductWitness'
        }, {
          name: '答疑解惑',
          router: 'AnsweringQuestions'
        }
      ]
    }, {
      name: '创富',
      router: 'CreatingWealth',
      list: [{
          name: '四大象限',
          router: 'FourQuadrants'
        },
        {
          name: '组织行销',
          router: 'OrganizingMarketing'
        }, {
          name: '爱健康制度',
          router: 'iHeathSystem'
        }, {
          name: '商业计划书',
          router: 'BusinessPlan'
        }, {
          name: '从月入五千美金到财富自由',
          router: 'GetRichQuick'
        }
      ]
    }, {
      name: '团队',
      router: 'Team',
      list: [{
          name: '专业化',
          router: 'Specialized'
        },
        {
          name: '国际化',
          router: 'Internationalization'
        }, {
          name: '现代化',
          router: 'Modernization'
        }
      ]
    }, {
      name: '名师汇',
      router: 'FamousTeacher',
      list: [{
        name: '名师风采',
        router: 'FamousTeacherElegantDemeanor',
        lattice: [{
          name: '郑春风',
          isSearch: true
        }, {
          name: '华医生',
          isSearch: true
        }, {
          name: '俞潞',
          isSearch: true
        }, {
          name: 'REENA',
          isSearch: true
        }, {
          name: '语熹',
          isSearch: true
        }, {
          name: '东方木',
          isSearch: true
        }, {
          name: '李冰',
          isSearch: true
        }, {
          name: '卓玛',
          isSearch: true
        }, {
          name: 'shekee',
          isSearch: true
        }]
      }, {
        name: '经典课程',
        router: 'ClassicCourses',
        lattice: [{
          name: '课程1',
          router: 'Course1'
        }, {
          name: '课程2',
          router: 'Course2'
        }, {
          name: '课程3',
          router: 'Course3'
        }, {
          name: '课程4',
          router: 'Course4'
        }, {
          name: '课程5',
          router: 'Course5'
        }, {
          name: '课程6',
          router: 'Course6'
        }, {
          name: '课程7',
          router: 'Course7'
        }, {
          name: '课程8',
          router: 'Course8'
        }, {
          name: '课程9',
          router: 'Course9'
        }]
      }, {
        name: '名师有约',
        router: 'MasterTeacherHasAnAppointment',
        lattice: [{
          name: 'a',
          router: 'ScientistsFightAging'
        }, {
          name: 'b',
          router: 'ScientistsFightAging'
        }, {
          name: 'c',
          router: 'ScientistsFightAging'
        }, {
          name: 'd',
          router: 'ScientistsFightAging'
        }, {
          name: 'e',
          router: 'ScientistsFightAging'
        }]
      }]
    }, {
      name: '系统',
      router: 'System',
      list: [{
          name: '系统简介',
          router: 'SystemIntroduction'
        },
        {
          name: 'YES大学',
          router: 'YesUniversity',
          lattice: [{
            name: '幸福长',
            router: 'HaveHappiness'
          }, {
            name: '教练型领导力',
            router: 'CoachingLeadership'
          }, {
            name: '抗衰老学院',
            router: 'Anti-agingAcademy'
          }, {
            name: '行销商学院',
            isRouterUrl: '/System/ThreeLevelTraining/ScientistsFightAging/BTrain'
          }, {
            name: '人文学院',
            isRouterUrl: '/System/ThreeLevelTraining/ScientistsFightAging/ATrain'
          }]
        }, {
          name: '三级培训',
          router: 'ThreeLevelTraining',
          list: [{
            name: 'C训',
            router: 'CTrain',
            lattice: [{
              name: '公益讲坛',
              router: 'CharityForum'
            }, {
              name: '腾讯招商',
              router: 'TencentMerchants'
            }, {
              name: '微信直播',
              router: 'WeChatLive'
            }]
          }, {
            name: 'B训',
            router: 'BTrain',
            lattice: [{
              name: '梦想启航',
              router: 'DreamSetSail'
            }, {
              name: '四定起飞',
              router: 'FourFixedTakeoff'
            }, {
              name: '行动圈3组能量数字',
              router: 'ThreeSetsOfEnergyNumbers'
            }, {
              name: '列名单',
              router: 'MakeAList'
            }, {
              name: '促单缔结',
              router: 'PromoteContract'
            }, {
              name: '聊需求',
              router: 'ChatDemand'
            }, {
              name: '持续跟进',
              router: 'ContinueToFollowUp'
            }, {
              name: '专业邀约',
              router: 'ProfessionalInvitation'
            }, {
              name: '正确检视',
              router: 'ViewCorrectly'
            }, {
              name: 'ABC展业',
              router: 'ABCExhibition'
            }, {
              name: '全面复制',
              router: 'FullCopy'
            }]
          }, {
            name: 'A训',
            router: 'ATrain',
            lattice: [{
              name: '能量早礼',
              router: 'EnergyMorningGift'
            }, {
              name: '智慧星空读书会',
              router: 'WisdomStarBookClub'
            }, {
              name: '大A艺术',
              router: 'BigAArt'
            }, {
              name: '鸿雁访谈',
              router: 'HongyanInterview'
            }, {
              name: '领导力提升',
              router: 'LeadershipImprovement'
            }, {
              name: '灵性成长',
              router: 'SpiritualGrowth'
            }]
          }]
        }, {
          name: 'Tools',
          router: 'NMNTimes',
          list: [{
            name: '视频',
            router: 'Video'
          }, {
            name: '图片',
            router: 'Photo'
          }, {
            name: '文字',
            router: 'Text'
          }]
        }
      ]
    },
    {
      name: '重要参考',
      router: 'ImportantReference',
      lattice: [{
        name: '营养学',
        router: 'Nutrition'
      }, {
        name: '互联网',
        router: 'TheInternet'
      }, {
        name: '消费商',
        router: 'Consumer'
      }, {
        name: '时间管理',
        router: 'TimeManagement'
      }, {
        name: '领导力',
        router: 'Leadership'
      }, {
        name: '沟通力',
        router: 'CommunicativeAbility'
      }, {
        name: '政策法规',
        router: 'PoliciesAndRegulations'
      }, {
        name: '职业规范',
        router: 'ProfessionalNorms'
      }]
    },
    {
      name: '联系我们',
      router: 'ContactUs'
    }
  ]
}

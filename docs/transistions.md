```
{  
   SceneConfigs:{  
      PushFromRight:{  
         gestures:{  
            pop:{  
               isDetachable:false,
               gestureDetectMovement:2,
               notMoving:0.3,
               directionRatio:0.66,
               snapVelocity:2,
               edgeHitWidth:30,
               stillCompletionRatio:0.6,
               fullDistance:375,
               direction:'left-to-right'
            }
         },
         springFriction:26,
         springTension:200,
         defaultTransitionVelocity:1.5,
         animationInterpolators:{  
            into:[  
               Function
            ],
            out:[  
               Function
            ]
         }
      },
      FloatFromRight:{  
         gestures:{  
            pop:{  
               isDetachable:false,
               gestureDetectMovement:2,
               notMoving:0.3,
               directionRatio:0.66,
               snapVelocity:2,
               edgeHitWidth:30,
               stillCompletionRatio:0.6,
               fullDistance:375,
               direction:'left-to-right'
            }
         },
         springFriction:26,
         springTension:200,
         defaultTransitionVelocity:1.5,
         animationInterpolators:{  
            into:[  
               Function
            ],
            out:[  
               Function
            ]
         }
      },
      FloatFromLeft:{  
         gestures:{  
            pop:{  
               isDetachable:false,
               gestureDetectMovement:2,
               notMoving:0.3,
               directionRatio:0.66,
               snapVelocity:2,
               edgeHitWidth:30,
               stillCompletionRatio:0.6,
               fullDistance:375,
               direction:'left-to-right'
            }
         },
         springFriction:26,
         springTension:200,
         defaultTransitionVelocity:1.5,
         animationInterpolators:{  
            into:[  
               Function
            ],
            out:[  
               Function
            ]
         }
      },
      FloatFromBottom:{  
         gestures:{  
            pop:{  
               isDetachable:false,
               gestureDetectMovement:2,
               notMoving:0.3,
               directionRatio:0.66,
               snapVelocity:2,
               edgeHitWidth:150,
               stillCompletionRatio:0.6,
               fullDistance:667,
               direction:'top-to-bottom'
            }
         },
         springFriction:26,
         springTension:200,
         defaultTransitionVelocity:1.5,
         animationInterpolators:{  
            into:[  
               Function
            ],
            out:[  
               Function
            ]
         }
      },
      FloatFromBottomAndroid:{  
         gestures:null,
         springFriction:20,
         springTension:200,
         defaultTransitionVelocity:3,
         animationInterpolators:{  
            into:[  
               Function
            ],
            out:[  
               Function
            ]
         }
      },
      FadeAndroid:{  
         gestures:null,
         springFriction:26,
         springTension:200,
         defaultTransitionVelocity:1.5,
         animationInterpolators:{  
            into:[  
               Function
            ],
            out:[  
               Function
            ]
         }
      },
      HorizontalSwipeJump:{  
         gestures:{  
            jumpBack:{  
               isDetachable:true,
               gestureDetectMovement:2,
               notMoving:0.3,
               directionRatio:0.66,
               snapVelocity:2,
               edgeHitWidth:null,
               stillCompletionRatio:0.6,
               fullDistance:375,
               direction:'left-to-right',
               overswipe:{  
                  frictionConstant:1,
                  frictionByDistance:1.5
               }
            },
            jumpForward:{  
               isDetachable:true,
               gestureDetectMovement:2,
               notMoving:0.3,
               directionRatio:0.66,
               snapVelocity:2,
               edgeHitWidth:null,
               stillCompletionRatio:0.6,
               fullDistance:375,
               direction:'right-to-left',
               overswipe:{  
                  frictionConstant:1,
                  frictionByDistance:1.5
               }
            }
         },
         springFriction:26,
         springTension:200,
         defaultTransitionVelocity:1.5,
         animationInterpolators:{  
            into:[  
               Function
            ],
            out:[  
               Function
            ]
         }
      }
   },
   getDefaultProps:{  
      [  
         Function
      ]      isReactClassApproved:{  

      }
   },
   defaultProps:{  
      configureScene:[  
         Function
      ],
      sceneStyle:13
   }
}
```
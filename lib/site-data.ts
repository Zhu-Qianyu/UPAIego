import type { Locale } from "@/lib/locale";

const fullChainZh = [
  {
    title: "数据采集",
    value: "覆盖双目、六目、Dex 手套多模态采集",
    details: "输入任务目标与动作工位，产出同步化的原始视频/传感数据。"
  },
  {
    title: "数据有效确认",
    value: "质量门禁 + 任务完成度验证",
    details: "通过时序完整性、动作覆盖率、异常段检测，保证可用样本进入标注。"
  },
  {
    title: "数据标注",
    value: "手部骨骼 + 身体骨骼 + 环境 SLAM",
    details: "形成结构化标签资产，支持动作理解、轨迹学习和场景建模。"
  },
  {
    title: "数据利用训练",
    value: "面向工业具身智能训练",
    details: "将高可信样本注入策略训练，缩短模型收敛周期并提升可复现性。"
  }
]; 

const devicesZh = [
  {
    name: "双目单视角视频数采设备",
    task: "精细动作采集、标准工序复刻",
    output: "双目视频、动作关键帧、基础轨迹",
    useCase: "装配工位动作规范化、机器人示教"
  },
  {
    name: "六目三视角视频数采设备",
    task: "复杂操作、多主体协同任务",
    output: "多视角同步视频、空间关系序列",
    useCase: "巡检流程学习、跨工位操作分析"
  },
  {
    name: "Dex 数采角度和力传感手套",
    task: "手部力学与精细抓取任务",
    output: "关节角度、接触力、时序动作片段",
    useCase: "精密操作学习、抓取策略训练"
  }
];

const algorithmsZh = [
  {
    title: "手部骨骼标注",
    desc: "支持多关节点时序标注，适配精细手部操作建模与技能迁移。"
  },
  {
    title: "身体骨骼标注",
    desc: "覆盖上肢、躯干与全身动作标签，提升复杂工业动作语义理解。"
  },
  {
    title: "环境视觉 SLAM 快速建模",
    desc: "快速构建场景地图与位姿序列，为任务复现和策略验证提供空间上下文。"
  }
];

const industrialValueZh = [
  "效率提升：采标训一体链路，减少跨供应商协同损耗。",
  "质量可控：数据有效确认机制减少无效样本进入训练。",
  "可复现：任务输入输出定义清晰，支持跨场景迁移与评估。"
];

const trainingPipelineZh = [
  {
    step: "阶段 1",
    title: "大规模人类第一视角视频预训练",
    detail: "基于跨任务、跨场景的人类第一视角视频数据进行预训练，先建立通用动作感知与任务先验。"
  },
  {
    step: "阶段 2",
    title: "少量真机数据微调",
    detail: "引入目标工位与目标设备的少量真机数据进行高效微调，快速对齐任务约束与执行细节。"
  },
  {
    step: "阶段 3",
    title: "任务能力强化与验证",
    detail: "在闭环评测中持续优化策略表现，使机器人在目标任务上达到稳定、可复现的高质量能力。"
  }
];

const fullChainEn = [
  {
    title: "Data Collection",
    value: "Multimodal capture via binocular, six-camera, and Dex glove devices",
    details: "Input task goals and workstations, output synchronized raw video and sensor data."
  },
  {
    title: "Data Validation",
    value: "Quality gate + task completion verification",
    details: "Use temporal integrity, action coverage, and anomaly checks before annotation."
  },
  {
    title: "Data Annotation",
    value: "Hand skeleton + body skeleton + visual SLAM",
    details: "Build structured labels for action understanding, trajectory learning, and scene modeling."
  },
  {
    title: "Training Utilization",
    value: "Designed for industrial embodied AI training",
    details: "Inject trusted samples into training to reduce convergence time and improve reproducibility."
  }
];

const devicesEn = [
  {
    name: "Binocular Single-view Video Capture Device",
    task: "Fine-grained action capture and standard process replication",
    output: "Binocular video, key action frames, base trajectories",
    useCase: "Assembly standardization and robot demonstration learning"
  },
  {
    name: "Six-camera Three-view Video Capture Device",
    task: "Complex operations and multi-actor collaboration",
    output: "Synchronized multi-view video and spatial relation sequences",
    useCase: "Inspection workflow learning and cross-workstation analysis"
  },
  {
    name: "Dex Angle and Force Sensing Glove",
    task: "Hand force mechanics and dexterous manipulation",
    output: "Joint angles, contact forces, temporal action segments",
    useCase: "Precision operation learning and grasp strategy training"
  }
];

const algorithmsEn = [
  {
    title: "Hand Skeleton Annotation",
    desc: "Multi-joint temporal annotation for fine hand-operation modeling and skill transfer."
  },
  {
    title: "Body Skeleton Annotation",
    desc: "Upper-body and full-body action labels to improve understanding of complex industrial motions."
  },
  {
    title: "Fast Visual SLAM Scene Modeling",
    desc: "Rapid scene map and pose sequence generation for repeatable tasks and policy validation."
  }
];

const industrialValueEn = [
  "Efficiency: integrated collect-annotate-train chain reduces multi-vendor coordination loss.",
  "Quality: data validation gates reduce invalid samples entering training.",
  "Reproducibility: clear I/O definitions support cross-scenario transfer and evaluation."
];

const trainingPipelineEn = [
  {
    step: "Stage 1",
    title: "Large-scale First-person Human Video Pretraining",
    detail: "Pretrain on cross-task and cross-scenario first-person human video to build general action priors."
  },
  {
    step: "Stage 2",
    title: "Few-shot Real-robot Fine-tuning",
    detail: "Fine-tune with a small amount of task-specific real-robot data to align constraints quickly."
  },
  {
    step: "Stage 3",
    title: "Task Capability Enhancement and Validation",
    detail: "Continuously optimize via closed-loop evaluation to achieve stable and reproducible task performance."
  }
];

export function getSiteData(locale: Locale) {
  if (locale === "en") {
    return {
      fullChain: fullChainEn,
      devices: devicesEn,
      algorithms: algorithmsEn,
      industrialValue: industrialValueEn,
      trainingPipeline: trainingPipelineEn
    };
  }

  return {
    fullChain: fullChainZh,
    devices: devicesZh,
    algorithms: algorithmsZh,
    industrialValue: industrialValueZh,
    trainingPipeline: trainingPipelineZh
  };
}

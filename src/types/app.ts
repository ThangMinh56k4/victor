export type Skill = {
  label: string
  icon: string | string[]
  isUseComponent?: boolean
  value: string
}

export type Education = {
  name: string
  major: string
  degree: string
  image: 'gopage' | 'gostream' | 'azoom' | 'nal' | 'tekup' | 'picon' | 'vinhUniversity'
  url: string
  time: string
  location: string
  description: string
  academicPerformance: string
}

export type FeaturedProject = {
  title: string
  description: string
  url: string
  image: 'gopage' | 'gostream' | 'azoom' | 'nal' | 'tekup' | 'picon' | 'vinhUniversity'
  tags: string[]
  role: string
  teamSize: number
  time: string
}

export type WorkExperience = {
  name: string
  role: string
  time: string
  image: 'gopage' | 'gostream' | 'azoom' | 'nal' | 'tekup' | 'picon' | 'vinhUniversity'
  description: string
  url: string
  location: string
}

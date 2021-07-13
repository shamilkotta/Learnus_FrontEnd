import React from 'react'
import './CourseDescription.scss'

function CourseDescription({data}) {
    return (
        <div className="course-description">
            <div>
                <p className="description__title">Description</p>
                <p className="description__body p">
                    join the other 20,000+ successful students who have already taken this course!
                    If you want to learn how to administrate the Windows Server operating system quickly and easily, this is the course you have been looking for!
                    I have designed this course to give you a solid foundation with Microsoft's Windows Server 2016 which is the latest Windows Server operating system available (released Oct 2016).
                    This course is great for anyone who is looking to advance (or begin) their career in Information Technology!
                    In this course, you will get hands-on experience while completing the following projects:
                </p>
            </div>
            <div>
                <p className="description__title">What you'll learn</p>
                <p className="description__body p">
                    Build a Windows Domain
                    Configure your Windows Server 2016 OS to act as a DHCP server
                    Install, configure and deploy the Domain Name System (DNS) role on your Windows Server Operating System
                    Install and Configure multiple Domain Controllers (DCs)
                    (bonus) Install Windows 10 and join a workstation to your new Windows Domain
                    Manage Windows 10 Workstations from your Windows Server Domain Controller
                    Create users, groups and OUs with Active Directory Users & Computers
                    Create and Understand Group Policy Objects (GPOs) with Group Policy Management
                    Learn to write Powershell scripts for your Windows Server like a true Information Technology Pro!
                    Create a Windows Server Update Services (WSUS) Server and Approve and Deploy Updates to your Domain Servers and Computers
                    Install and manage Windows Server 2016 Core Edition
                </p>
            </div>
            <div>
                <p className="description__title">Requirements</p>
                <p className="description__body p">
                    A computer with at least 4 GB of RAM and 64bit OS (if you want to follow along)
                    Internet Access
                    That's it!
                    A Windows PC or a MAC (either work just fine)
                </p>
            </div>
            <div>
                <p className="description__title">Who this course is for:</p>
                <p className="description__body p">
                    Anyone who wants to learn about Windows Server 2016
                    Take this course if you want to get an Information Technology Job
                    Take this course if you want to add high-paying skills your resume
                </p>
            </div>
        </div>
    )
}

export default CourseDescription

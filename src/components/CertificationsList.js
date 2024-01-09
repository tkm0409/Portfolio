import React from 'react';
import './CertificationsList.css'; // Import your CSS file
import awsLogo from '../assets/logo.png'; // Import your AWS logo image
import microsoftLogo from '../assets/microsoft.png'; // Import your Microsoft logo image
import hackerrankLogo from '../assets/hackerrank logo.jpg'; // Import your HackerRank logo image
import awards from '../assets/award.png';
import microsoftFundamentals from '../assets/microsoft-certified-fundamentals-badge.svg';
import microsoftAssociate from '../assets/microsoft-certified-associate-badge.svg';
import microsoftExpert from '../assets/microsoft-certified-expert-badge.svg';


const LicenseCertification = ({ title, issuingOrganization, issueDate, expirationDate, credentialId, logo, credentialURL }) => (
    <div className="license-certification">
        <div className="certification-header">
            <img src={logo} alt={`${issuingOrganization} Logo`} className="certification-logo"  draggable="false" />
            <div className="certification-info">
                <h3 className="title">{title}</h3>
                <p className="issuing-organization">{issuingOrganization}</p>
                {credentialId && (
                    <p className="credential-id">
                        Credential ID {credentialId}
                    </p>
                )}
            </div>
        </div>
        <p className="date-range">
            {issueDate} - {expirationDate || 'Present'}
        </p>

        <a href={credentialURL} className="show-credential-button">
            Show Credential
        </a>

    </div>
);

const certificationsData = [
    {
        title: 'AWS Certified Cloud Practitioner',
        issuingOrganization: 'Amazon Web Services (AWS)',
        issueDate: 'Sep 2023',
        expirationDate: 'Sep 2026',
        logo: awsLogo,
        credentialURL: 'https://www.credly.com/badges/ac15e2db-c930-4d43-9dc7-5f4fcdee90a5/linked_in_profile'
    },
    {
        title: 'AWS Certified Developer – Associate',
        issuingOrganization: 'Amazon Web Services (AWS)',
        issueDate: 'Oct 2023',
        expirationDate: 'Oct 2026',
        logo: awsLogo,
        credentialURL: 'https://www.credly.com/badges/ee2154ae-3090-494f-b12f-de5b5ac0cd68/linked_in_profile'
    },
    {
        title: 'AWS Certified Solutions Architect – Professional',
        issuingOrganization: 'Amazon Web Services (AWS)',
        issueDate: 'Oct 2023',
        expirationDate: 'Oct 2026',
        logo: awsLogo,
        credentialURL: 'https://www.credly.com/badges/a7475891-79e5-42b3-be08-fbbe28d39ae6/linked_in_profile'
    },
    
    {
        title: 'Microsoft Certified: Azure Fundamentals',
        issuingOrganization: 'Microsoft',
        issueDate: 'Dec 2022',
        logo: microsoftFundamentals,
        credentialURL: 'https://www.credly.com/badges/a575b6d0-de8c-484e-b62d-cad63aad8846/linked_in_profile'
    },
    {
        title: 'Microsoft Certified: Azure AI Fundamentals',
        issuingOrganization: 'Microsoft',
        issueDate: 'Oct 2023',
        logo: microsoftFundamentals,
        credentialURL: 'https://learn.microsoft.com/en-gb/users/tharunkumarmaddala-6138/credentials/e11e64325db82c24'
    },
    {
        title: 'Microsoft Certified: Azure Data Fundamentals',
        issuingOrganization: 'Microsoft',
        issueDate: 'Oct 2023',
        logo: microsoftFundamentals,
        credentialURL: 'https://learn.microsoft.com/en-us/users/tharunkumarmaddala-6138/credentials/ff1f01e0e05a42f'
    },
    {
        title: 'Microsoft Certified: Azure Administrator Associate',
        issuingOrganization: 'Microsoft',
        issueDate: 'Dec 2023',
        expirationDate: 'Dec 2024',
        logo: microsoftAssociate,
        credentialURL: 'https://learn.microsoft.com/api/credentials/share/en-us/TharunkumarMaddala-6138/4606B138783C1D?sharingId=3875DA5B9B8F1D57'
    },
    {
        title: 'Microsoft Certified: Azure Developer Associate',
        issuingOrganization: 'Microsoft',
        issueDate: 'Dec 2023',
        expirationDate: 'Dec 2024',
        logo: microsoftAssociate,
        credentialURL: 'https://learn.microsoft.com/api/credentials/share/en-us/TharunkumarMaddala-6138/AAB62E5A2F80BF7B?sharingId=3875DA5B9B8F1D57'
    },
    {
        title: 'Microsoft Certified: Azure Solutions Architect Expert',
        issuingOrganization: 'Microsoft',
        issueDate: 'Dec 2023',
        expirationDate: 'Dec 2024',
        logo: microsoftExpert,
        credentialURL: 'https://learn.microsoft.com/api/credentials/share/en-us/TharunkumarMaddala-6138/24CDDDE7BCFB11AF?sharingId=3875DA5B9B8F1D57'
    },
    {
        title: 'Python',
        issuingOrganization: 'HackerRank',
        issueDate: 'Jul 2021',
        credentialId: '153f096f5635',
        logo: hackerrankLogo,
        credentialURL: 'https://www.hackerrank.com/certificates/153f096f5635'
    },
    {
        title: 'SQL',
        issuingOrganization: 'HackerRank',
        issueDate: 'Jul 2022',
        credentialId: '57652ac44844',
        logo: hackerrankLogo,
        credentialURL: 'https://www.hackerrank.com/certificates/57652ac44844'
    },
];

function CertificationsList() {

    const preventContextMenu = (e) => {
        e.preventDefault();
    }

    return (
        <div className="certifications-list">
            <img className='awards-logo' src={awards} alt="Licenses & Certifications" draggable="false" onContextMenu={preventContextMenu} />
            <h3 className='certifications-title'>Licenses & Certifications</h3>
            {certificationsData.map((certification, index) => (
                <LicenseCertification key={index} {...certification} />
            ))}
        </div>
    );
}

export default CertificationsList;

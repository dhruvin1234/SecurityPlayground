import React from "react";
// import './MitigationAndDefense.css';

const MitigationAndDefense = () => {
    return (
        <div className="types-container">
            <h1>Windows Privilege Escalation Mitigation and Defense</h1>

            <h2>1. Limit User Privileges</h2>
            <p>Restrict administrative privileges by configuring the local user groups:</p>
            <pre>
                {`net localgroup Administrators <username> /delete`}
            </pre>
            <p>Limit user rights assignments in the local security policy:</p>
            <pre>
                {`secpol.msc > Local Policies > User Rights Assignment`}
            </pre>
            <p>Use Group Policy to restrict remote desktop access to only trusted users:</p>
            <pre>
                {`gpedit.msc > Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Connections`}
            </pre>

            <h2>2. Patch and Update Systems Regularly</h2>
            <p>Regularly apply patches and updates to mitigate vulnerabilities:</p>
            <pre>
                {`sconfig > 6 to install updates`}
            </pre>
            <p>Enable automatic updates:</p>
            <pre>
                {`Set-WUSettings -EnableAutomaticUpdates`}
            </pre>

            <h2>3. Minimize Unnecessary Services and Programs</h2>
            <p>Disable unnecessary services that can be exploited:</p>
            <pre>
                {`Get-Service | Where-Object { $_.Status -eq 'Running' -and $_.DisplayName -match 'UnnecessaryService' } | Stop-Service`}
            </pre>
            <p>Remove unnecessary software from the system:</p>
            <pre>
                {`Get-WmiObject -Class Win32_Product | Where-Object { $_.Name -match 'UnwantedApp' } | ForEach-Object { $_.Uninstall() }`}
            </pre>

            <h2>4. Secure File Permissions and Ownership</h2>
            <p>Ensure that sensitive files like system files have restricted permissions:</p>
            <pre>
                {`icacls C:\\Windows\\System32\\calc.exe /deny Everyone:(F)`}
            </pre>
            <p>Check and fix insecure file permissions:</p>
            <pre>
                {`icacls "C:\\Users\\All Users\\AppData" /grant "Everyone:(OI)(CI)(RX)"`}
            </pre>

            <h2>5. Monitor Logs and Use Intrusion Detection Systems (IDS)</h2>
            <p>Enable Windows Event Log and configure auditing for privilege escalation events:</p>
            <pre>
                {`AuditPol /set /subcategory:"Logon/Logoff" /success:enable /failure:enable`}
            </pre>
            <p>Install and configure tools like OSSEC or Snort for IDS:</p>
            <pre>
                {`# Example command to start Snort
snort -c C:\\Snort\\etc\\snort.conf -i 1`}
            </pre>

            <h2>6. Secure User Account Control (UAC)</h2>
            <p>Ensure that UAC is enabled to prevent unauthorized privilege escalation:</p>
            <pre>
                {`reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System" /v EnableLUA /t REG_DWORD /d 1 /f`}
            </pre>
            <p>Limit the use of Administrator privileges by setting the UAC level to maximum:</p>
            <pre>
                {`Control Panel > User Accounts > Change User Account Control settings`}
            </pre>

            <h2>7. Disable SMBv1 and Other Legacy Protocols</h2>
            <p>Disable SMBv1 to avoid exploitation of vulnerabilities like EternalBlue:</p>
            <pre>
                {`Set-SmbServerConfiguration -EnableSMB1 $false`}
            </pre>
            <p>Disable other legacy protocols like NetBIOS:</p>
            <pre>
                {`Set-NetAdapterAdvancedProperty -Name "Ethernet" -DisplayName "NetBIOS over TCP/IP" -DisplayValue "Disabled"`}
            </pre>

            <h2>8. Use Antivirus and Endpoint Protection</h2>
            <p>Ensure that real-time protection is enabled and regularly update the antivirus software:</p>
            <pre>
                {`Set-MpPreference -DisableRealtimeMonitoring $false`}
            </pre>
            <p>Configure Windows Defender or other endpoint protection tools:</p>
            <pre>
                {`Set-MpPreference -SignatureUpdateInterval 30`}
            </pre>

            <h2>9. Limit Remote Access to Trusted IPs</h2>
            <p>Restrict remote access (e.g., RDP, PowerShell Remoting) to trusted IPs:</p>
            <pre>
                {`New-NetFirewallRule -DisplayName "Allow RDP from trusted IP" -Direction Inbound -Protocol TCP -LocalPort 3389 -RemoteAddress <trusted-ip> -Action Allow`}
            </pre>
            <p>Disable PowerShell Remoting if not required:</p>
            <pre>
                {`Disable-PSRemoting -Force`}
            </pre>

            <h2>10. Secure Group Policy Settings</h2>
            <p>Implement group policies to limit user rights:</p>
            <pre>
                {`gpedit.msc > Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services`}
            </pre>
            <p>Configure group policies to prevent unauthorized execution of certain commands:</p>
            <pre>
                {`gpedit.msc > User Configuration > Administrative Templates > System > Don't run specified Windows applications`}
            </pre>

            <h2>11. Secure Scheduled Tasks</h2>
            <p>Ensure that scheduled tasks are properly configured and do not allow unauthorized access:</p>
            <pre>
                {`schtasks /Change /TN "<task-name>" /Disable`}
            </pre>
            <p>Remove unnecessary scheduled tasks:</p>
            <pre>
                {`schtasks /Delete /TN "<task-name>"`}
            </pre>

            <h2>12. Use Application Whitelisting</h2>
            <p>Implement AppLocker or Windows Defender Application Control (WDAC) to allow only trusted applications:</p>
            <pre>
                {`Set-AppLockerPolicy -XMLPolicy <policy-file.xml> -Merge`}
            </pre>
            <p>Use Windows Defender Controlled Folder Access to protect critical files:</p>
            <pre>
                {`Set-MpPreference -EnableControlledFolderAccess Enabled`}
            </pre>

            <h2>13. Kernel Hardening</h2>
            <p>Apply Windows security features to harden the kernel against exploitation:</p>
            <pre>
                {`bcdedit /set {current} nx AlwaysOn`}
            </pre>
            <p>Disable the Windows script host (WSH) to prevent script-based exploits:</p>
            <pre>
                {`reg add "HKCU\\Software\\Microsoft\\Windows Script Host\\Settings" /v Enabled /t REG_DWORD /d 0 /f`}
            </pre>

            <h2>Additional Hardening Commands</h2>
            <p>Audit Windows security for misconfigurations or vulnerabilities:</p>
            <pre>
                {`gpresult /H gpresult.html`}
            </pre>
            <p>Monitor user and administrator activities:</p>
            <pre>
                {`Get-WinEvent -LogName Security`}
            </pre>
        </div>
    );
};

export default MitigationAndDefense;

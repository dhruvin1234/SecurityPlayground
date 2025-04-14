import React from "react";
import './MitigationAndDefense.css';

const MitigationAndDefense = () => {
    return (
        <div className="types-container">
            <h1>Linux Privilege Escalation Mitigation and Defense</h1>

            <h2>1. Limit User Privileges</h2>
            <p>Limit sudo access by editing the sudoers file:</p>
            <pre>
                {`sudo visudo`}
            </pre>
            <p>Restrict specific sudo access:</p>
            <pre>
                {`username ALL=(ALL) NOPASSWD: /bin/ls, /bin/cat`}
            </pre>
            <p>Disable passwordless sudo for all users:</p>
            <pre>
                {`sudo visudo
Defaults timestamp_timeout=0`}
            </pre>

            <h2>2. Patch and Update Systems Regularly</h2>
            <p>Regularly update and upgrade the system:</p>
            <pre>
                {`sudo apt update && sudo apt upgrade -y   # Ubuntu/Debian
sudo yum update -y                         # CentOS/RHEL`}
            </pre>
            <p>Automate security updates:</p>
            <pre>
                {`sudo apt install unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades`}
            </pre>

            <h2>3. Minimize SUID/SGID Usage</h2>
            <p>Find SUID/SGID binaries:</p>
            <pre>
                {`find / -type f -a \( -perm -4000 -o -perm -2000 \)`}
            </pre>
            <p>Remove unnecessary SUID/SGID flags:</p>
            <pre>
                {`sudo chmod u-s /path/to/binary
sudo chmod g-s /path/to/binary`}
            </pre>

            <h2>4. Secure File Permissions and Ownership</h2>
            <p>Change ownership and permissions for critical files:</p>
            <pre>
                {`sudo chown root:root /etc/passwd /etc/shadow
sudo chmod 644 /etc/passwd
sudo chmod 000 /etc/shadow`}
            </pre>
            <p>Set immutable flag on critical files:</p>
            <pre>
                {`sudo chattr +i /etc/passwd
sudo chattr +i /etc/shadow`}
            </pre>

            <h2>5. Secure Cron Jobs</h2>
            <p>Restrict cron job permissions:</p>
            <pre>
                {`sudo chmod 700 /etc/cron.d
sudo chmod 700 /etc/crontab
sudo chmod 700 /var/spool/cron/crontabs`}
            </pre>
            <p>Review cron jobs:</p>
            <pre>
                {`cat /etc/crontab
cat /etc/cron.d/*`}
            </pre>

            <h2>6. Disable Unnecessary Services and Binaries</h2>
            <p>Stop and disable unnecessary services:</p>
            <pre>
                {`sudo systemctl stop <service-name>
sudo systemctl disable <service-name>`}</pre>
            <p>Remove unnecessary binaries:</p>
            <pre>
                {`which nmap
sudo rm /usr/bin/nmap`}
            </pre>

            <h2>7. Control User and Group Access</h2>
            <p>List all users and groups:</p>
            <pre>
                {`cat /etc/passwd
cat /etc/group`}
            </pre>
            <p>Remove unnecessary user accounts:</p>
            <pre>
                {`sudo userdel -r <username>`}
            </pre>

            <h2>8. Use SELinux or AppArmor for Mandatory Access Control (MAC)</h2>
            <p>Ensure SELinux is installed and enabled:</p>
            <pre>
                {`sudo yum install selinux-policy selinux-policy-targeted
sudo setenforce 1`}
            </pre>
            <p>Enable AppArmor:</p>
            <pre>
                {`sudo apt install apparmor apparmor-utils
sudo systemctl enable apparmor
sudo systemctl start apparmor`}
            </pre>

            <h2>9. Monitor Logs and Use Intrusion Detection Systems (IDS)</h2>
            <p>Install and configure Fail2Ban:</p>
            <pre>
                {`sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban`}
            </pre>
            <p>Check authentication logs:</p>
            <pre>
                {`cat /var/log/auth.log
cat /var/log/secure`}
            </pre>

            <h2>10. Use Secure Boot and Hardware Security</h2>
            <p>Check Secure Boot status:</p>
            <pre>
                {`sudo mokutil --sb-state`}
            </pre>
            <p>Enable TPM on compatible hardware:</p>
            <pre>
                {`sudo dmesg | grep -i tpm`}
            </pre>

            <h2>11. Limit Network Access</h2>
            <p>Block unnecessary inbound connections with UFW:</p>
            <pre>
                {`sudo ufw enable
sudo ufw deny 22
sudo ufw allow from <trusted-ip> to any port 22`}
            </pre>

            <h2>12. Privileged Account Management</h2>
            <p>Disable direct root login via SSH:</p>
            <pre>
                {`sudo vi /etc/ssh/sshd_config
PermitRootLogin no
sudo systemctl restart sshd`}
            </pre>

            <h2>13. Kernel Hardening</h2>
            <p>Enable Grsecurity (if applicable):</p>
            <pre>
                {`sudo grsecurity --list`}
            </pre>
            <p>Disable unnecessary kernel modules:</p>
            <pre>
                {`lsmod
sudo rmmod <module_name>`}
            </pre>

            <h2>Additional Hardening Commands</h2>
            <p>Audit the system for security issues:</p>
            <pre>
                {`sudo apt install lynis
sudo lynis audit system`}
            </pre>
            <p>Check sudo logs:</p>
            <pre>
                {`sudo cat /var/log/sudo.log`}
            </pre>
        </div>
    );
};

export default MitigationAndDefense;
